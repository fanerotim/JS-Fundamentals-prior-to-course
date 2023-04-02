function cone(radius, height) {

    let volume = height * Math.PI * Math.pow(radius, 2) / 3;
    console.log(`volume = ${volume.toFixed(4)}`);

    let slantedHeight = Math.pow(radius, 2) + Math.pow(height, 2);
    slantedHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    
    let baseArea = Math.PI * Math.pow(radius, 2);

    let totalSurfaceArea = baseArea + Math.PI * radius * slantedHeight;
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);  
}

cone(3.3,
    7.8)