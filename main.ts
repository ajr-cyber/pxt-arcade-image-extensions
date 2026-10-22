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

    /**
     * Takes an array of images, rotates each one 90 degrees clockwise, 
     * and returns a new array containing the rotated images.
     * @param list The array of images to rotate
     */
    //% blockId="images_rotate_array_90_clockwise"
    //% block="rotate image array $list 90° clockwise"
    //% list.shadow=variables_get
    export function rotateImageArray90Clockwise(list: Image[]): Image[] {
        // 1. Safety check: if the array doesn't exist, return an empty array
        if (!list) return [];

        // 2. Create a fresh, empty array to hold our new images
        let rotatedList: Image[] = [];

        // 3. Loop through every image in the original array
        for (let i = 0; i < list.length; i++) {
            let currentImg = list[i];

            // Re-use your existing rotation logic for individual images
            let rotatedImg = rotate90Clockwise(currentImg);

            // Push the newly created image into our output array
            if (rotatedImg) {
                rotatedList.push(rotatedImg);
            }
        }

        // 4. Return the completed list of rotated images
        return rotatedList;
    }

}
