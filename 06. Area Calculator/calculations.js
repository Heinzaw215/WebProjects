// Area Functions
    export function calculateCircleArea (radius) {
        return Math.PI * (radius * radius);
    }

    export function calculateTriangleArea (base, height) {
        return (1 / 2) * base * height;
    };

    export function calculateSquareArea (length) {
        return length * length;
    };

    export function calculateRhombusArea(d1, d2) {
        return (d1 * d2) / 2;
    }

    export function calculateParallelogramArea(b, height){
        return b * height;
    } 

    export function calculateRectangleArea(length, width) {
        return length * width;
    }

    export function calculateTrapezoidArea(a, b, height) {
        return (1 / 2) * (a + b) * height;
    }

    export function calculateEllipseArea(a, b) {
        return PI * a * b;
    }

    export function calculatePolygonArea(n, s, a) {
        return (n * s * a) / 2;
    }

    // export function calculateCylinderVolume(radius, height) {
    //     return Math.PI * radius * radius * height;
    // }

    // export function calculateConeVolume(radius, height) {
    //     return (1 / 3) * Math.PI * radius * radius * height;
    // }

    // export function calculateSphereVolume(radius) {
    //     return (4 / 3) * Math.PI * radius * radius * radius;
    // }

    // export function calculateCuboidVolume(l, w, height) {
    //     return l * w * height;
    // }

    // export function calculateCubeVolume(s) {
    //     return s * s * s;
    // }

    // export function calculatePyramidVolume(radius, height) {
    //     return (1 / 3) * Math.PI * radius * radius * height;
    // }

    // export function calculateFrustumVolume(radius1, radius2, height) {
    //     return Math.PI * (radius1 * radius1 + radius1 * radius2 + radius2 * radius2) / 3 * height;
    // }

    // export function calculateTorusVolume(radius, R) {
    //     return 2 * Math.PI * Math.PI * radius * R;
    // }

    // export function calculatePrismVolume(baseArea, height) {
    //     return baseArea * height;
    // }
