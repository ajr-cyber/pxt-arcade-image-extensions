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
            let rotatedImg2 = rotate90Clockwise(currentImg);

            // Push the newly created image into our output array
            if (rotatedImg2) {
                rotatedList.push(rotatedImg2);
            }
        }

        // 4. Return the completed list of rotated images
        return rotatedList;
    }


    /**
     * Rotates an image 90 degrees anticlockwise and returns the new rotated image.
     * @param img The source image to rotate
     */
    //% blockId="images_rotate_90_anticlockwise"
    //% block="rotate $img 90° anticlockwise"
    //% img.shadow=image_picker
    export function rotate90Anticlockwise(img: Image): Image {
        if (!img) return null;

        let oldWidth = img.width;
        let oldHeight = img.height;

        // Dimensions flip (e.g., 16x8 becomes 8x16)
        let rotatedImg = image.create(oldHeight, oldWidth);

        for (let srcX = 0; srcX < oldWidth; srcX++) {
            for (let srcY = 0; srcY < oldHeight; srcY++) {
                let color = img.getPixel(srcX, srcY);

                // Formula for 90° anticlockwise rotation
                let destX = srcY;
                let destY = (oldWidth - 1) - srcX;

                rotatedImg.setPixel(destX, destY, color);
            }
        }

        return rotatedImg;
    }

    /**
        * Takes an array of images, rotates each one 90 degrees anticlockwise, 
        * and returns a new array containing the rotated images.
        * @param list The array of images to rotate
        */
    //% blockId="images_rotate_array_90_anticlockwise"
    //% block="rotate image array $list 90° anticlockwise"
    //% list.shadow=variables_get
    export function rotateImageArray90Anticlockwise(list: Image[]): Image[] {
        if (!list) return [];

        let rotatedList: Image[] = [];

        for (let i = 0; i < list.length; i++) {
            let currentImg = list[i];

            // Calls the anticlockwise calculation written above
            let rotatedImg = rotate90Anticlockwise(currentImg);

            if (rotatedImg) {
                rotatedList.push(rotatedImg);
            }
        }

        return rotatedList;
    }
}
