"""Crop, grade and export the site imagery as responsive WebP files.

Run from the project root:  python3 scripts/process-images.py
Requires Pillow. Wikimedia source files are expected in scripts/source/.
"""

from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parent.parent
PHOTOS = sorted((ROOT / "photos" / "pics").glob("*.jpeg"))
SOURCE = ROOT / "scripts" / "source"
OUT = ROOT / "src" / "assets" / "images"
OUT.mkdir(parents=True, exist_ok=True)


def load(path: Path) -> Image.Image:
    return ImageOps.exif_transpose(Image.open(path)).convert("RGB")


def crop_box(im: Image.Image, box: tuple[float, float, float, float]) -> Image.Image:
    """Crop using fractional (left, top, right, bottom) coordinates."""
    w, h = im.size
    l, t, r, b = box
    return im.crop((round(l * w), round(t * h), round(r * w), round(b * h)))


def duotone(im: Image.Image, shadow=(6, 6, 6), highlight=(236, 226, 212), contrast=1.18, gamma=1.12) -> Image.Image:
    """Warm monochrome grade: black shadows into soft ivory highlights."""
    g = ImageOps.grayscale(im)
    g = ImageEnhance.Contrast(g).enhance(contrast)
    g = g.point(lambda v: round(255 * ((v / 255) ** gamma)))
    return ImageOps.colorize(g, black=shadow, white=highlight, mid=(118, 108, 98))


def muted(im: Image.Image, saturation=0.55, brightness=0.9, contrast=1.08) -> Image.Image:
    im = ImageEnhance.Color(im).enhance(saturation)
    im = ImageEnhance.Brightness(im).enhance(brightness)
    return ImageEnhance.Contrast(im).enhance(contrast)


def export(im: Image.Image, name: str, widths: list[int], quality=74, out: Path = OUT) -> None:
    out.mkdir(parents=True, exist_ok=True)
    for w in widths:
        if w > im.width:
            w = im.width
        h = round(im.height * w / im.width)
        im.resize((w, h), Image.LANCZOS).save(out / f"{name}-{w}.webp", "WEBP", quality=quality, method=6)
        print(f"{name}-{w}.webp", (w, h))


# Bombay High Court central tower (A.Savin, Wikimedia Commons, FAL 1.3).
# Hero image: written to public/ with stable names so index.html can preload it.
tower = load(SOURCE / "bhc-tower.jpg")
tower = crop_box(tower, (0.235, 0.0, 0.765, 1.0))
tower = duotone(tower).filter(ImageFilter.GaussianBlur(0.5))
export(tower, "bhc-tower", [480, 760, 1000], quality=60, out=ROOT / "public" / "images")

# Bombay High Court across the Oval Maidan (A.Savin, Wikimedia Commons, FAL 1.3)
maidan = load(SOURCE / "bhc-maidan.jpg")
maidan = crop_box(maidan, (0.0, 0.18, 1.0, 0.92))
export(duotone(maidan), "bhc-maidan", [960, 1600, 1920])

# High Court heritage corridor (firm's own photographs)
corridor = load(PHOTOS[6])
export(muted(corridor, saturation=0.5, brightness=0.82), "corridor-wide", [640, 960])
corridor_close = load(PHOTOS[4])
export(muted(corridor_close, saturation=0.5, brightness=0.82), "corridor-advocate", [640, 960])

# Bombay High Court sketch mural in the chambers
mural = load(PHOTOS[49])
mural = crop_box(mural, (0.0, 0.055, 1.0, 0.43))
export(duotone(mural, contrast=1.05, gamma=1.25), "chambers-mural", [720])

def portrait(im: Image.Image, cx: float, top: float, width: float, aspect=4 / 5) -> Image.Image:
    """Crop a portrait of the given aspect, centred horizontally on cx (fractions of the image)."""
    w, h = im.size
    cw = round(width * w)
    ch = round(cw / aspect)
    left = max(0, min(w - cw, round(cx * w - cw / 2)))
    t = max(0, min(h - ch, round(top * h)))
    return im.crop((left, t, left + cw, t + ch))


# Team portraits (4:5)
export(portrait(load(PHOTOS[14]), cx=0.48, top=0.17, width=0.86), "kiran-nikam", [560, 860], quality=78)

PORTRAITS = ROOT / "pics"
export(portrait(load(PORTRAITS / "sachin.jpeg"), cx=0.45, top=0.07, width=0.9), "sachin-thorat", [400, 640], quality=80)
export(portrait(load(PHOTOS[50]), cx=0.45, top=0.07, width=0.9), "atharv-nikam", [400, 640], quality=80)
export(portrait(load(PORTRAITS / "sanchit.jpeg"), cx=0.52, top=0.03, width=1.0), "sanchit-nikam", [400, 640], quality=80)
