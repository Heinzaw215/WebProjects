// Area Functions
    export function calculateCircleArea (radius) {
        console.log(Math.PI * (radius * radius));
    }

    export function calculateTriangleArea (base, height) {
        console.log((1 / 2) * base * height);
    };

    export function calculateSquareArea (length) {
        console.log(length * length);
    };

    export function calculateRhombusArea(d1, d2) {
        console.log((d1 * d2) / 2);
    }

    export function calculateParallelogramArea(b, height){
        console.log(b * height);
    } 

    export function calculateRectangleArea(length, width) {
        console.log(length * width);
    }

    export function calculateTrapezoidArea(a, b, height) {
        console.log((1 / 2) * (a + b) * height);
    }

    export function calculateEllipseArea(a, b) {
        console.log(PI * a * b);
    }

    export function calculatePolygonArea(n, s, a) {
        console.log((n * s * a) / 2);
    }

    // export function calculateCylinderVolume(radius, height) {
    //     console.log(Math.PI * radius * radius * height);
    // }

    // export function calculateConeVolume(radius, height) {
    //     console.log((1 / 3) * Math.PI * radius * radius * height);
    // }

    // export function calculateSphereVolume(radius) {
    //     console.log((4 / 3) * Math.PI * radius * radius * radius);
    // }

    // export function calculateCuboidVolume(l, w, height) {
    //     console.log(l * w * height);
    // }

    // export function calculateCubeVolume(s) {
    //     console.log(s * s * s);
    // }

    // export function calculatePyramidVolume(radius, height) {
    //     console.log((1 / 3) * Math.PI * radius * radius * height);
    // }

    // export function calculateFrustumVolume(radius1, radius2, height) {
    //     console.log(Math.PI * (radius1 * radius1 + radius1 * radius2 + radius2 * radius2) / 3 * height);
    // }

    // export function calculateTorusVolume(radius, R) {
    //     console.log(2 * Math.PI * Math.PI * radius * R);
    // }

    // export function calculatePrismVolume(baseArea, height) {
    //     console.log(baseArea * height);
    // }
