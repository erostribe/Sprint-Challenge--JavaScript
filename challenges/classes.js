// 1. Copy and paste your prototype in here and refactor into class syntax.


{
    class CuboidMaker {
        constructor(param) {
            this.length = param.length;
            this.width = param.width;
            this.height = param.height;
        }
        surfaceArea() {
            return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        }
        volume() {
            return this.length * this.width * this.height;
        }
    }
    
    
    const shapeMaker = new CuboidMaker({
        length: 4,
        width: 5,
        height: 5
    });
    
    
    
    // Test your volume and surfaceArea methods by uncommenting the logs below:
    console.log(shapeMaker.volume()); // 100
    console.log(shapeMaker.surfaceArea()); // 130
    
    
    // Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
    //Find out the formulas for volume and surface area for cubes and create those methods 
    //using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
    
    
    class CubeMaker extends CuboidMaker {
        constructor(character){
        super(character);
        }
        cubeVolume() {
            return 3 * (this.length * this.length * this.length);
        }
        surfaceArea() {
            return 6 * Math.pow(2, this.length);
        }
    }
    
    const cube = new CubeMaker({
        length: 7,
        width: 5,
        height: 5
    });
    
    
    console.log(cube.cubeVolume());
    console.log(cube.surfaceArea());
    
    }