namespace images {

    /**
     * Rotates an image 90 degrees clockwise and returns the new rotated image.
     * @param img The source image to rotate
     */
    //% blockId="images_rotate_90_clockwise"
    //% block="rotate $img 90° clockwise"
    //% img.shadow=image_picker
    export function rotate90Clockwise(img: Image): Image {
        if (!img) return null;

        // 1. Get original dimensions
        let oldWidth = img.width;
        let oldHeight = img.height;

        // 2. Create a new blank image with flipped dimensions
        // (A 16x8 image becomes 8x16)
        let rotatedImg = image.create(oldHeight, oldWidth);

        // 3. Map old pixel coordinates to new rotated coordinates
        for (let srcX = 0; srcX < oldWidth; srcX++) {
            for (let srcY = 0; srcY < oldHeight; srcY++) {
                // Get the pixel color from original image
                let color = img.getPixel(srcX, srcY);

                // Calculate new position for 90-degree clockwise shift
                let destX = (oldHeight - 1) - srcY;
                let destY = srcX;

                // Write to the new image canvas
                rotatedImg.setPixel(destX, destY, color);
            }
        }

        return rotatedImg;
    }
}
