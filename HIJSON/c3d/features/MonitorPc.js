var Feature = require('./Feature.js');

Feature.inherits(MonitorPc, Feature);

function MonitorPc(feature) {
	Feature.call(this, feature);
}

MonitorPc.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

MonitorPc.prototype.in_graph = true;
MonitorPc.prototype.in_2D_map = false;

MonitorPc.prototype.get3DModel = function() {

      var monitor=new THREE.Object3D();
      monitor.rotation.x=Math.PI/2;

      var power=THREE.ImageUtils.loadTexture("../../assets/textures/general/power.jpg" )
      var samsung = THREE.ImageUtils.loadTexture("../../assets/textures/general/samsung.jpg" )
      var nero = THREE.ImageUtils.loadTexture("../../assets/textures/general/nero.jpg" )
      var bianco = THREE.ImageUtils.loadTexture("../../assets/textures/general/bianco.jpg" )
      var tastiera=THREE.ImageUtils.loadTexture("../../assets/textures/general/tastiera.jpg" )
  
      var cubeGeometryBase = new THREE.BoxGeometry(0.04,0.42,0.06);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:bianco});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0,0.79,0);
      banco.rotation.x=Math.PI/2;
      monitor.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.04,0.42,0.06);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:bianco});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0,0.43,0);
      banco.rotation.x=Math.PI/2;
      monitor.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.04,0.42,0.04);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:bianco});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0,0.61,0.21);
     
      monitor.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.04,0.42,0.04);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:bianco});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0,0.61,-0.21);
      
      monitor.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.4,0.40,0.05);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(-0.02,0.61,0);
      banco.rotation.y=Math.PI/2;
      monitor.add(banco);   


      var cylinderGeometry1 = new THREE.CylinderGeometry(0.02,0.02,0.07,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:nero});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(0,0.38,0);
      monitor.add(maniglia);  

      var cubeGeometryBase = new THREE.BoxGeometry(0.01,0.02,0.02);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:power});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.0155,0.43,0);
      
      monitor.add(banco);

       

      var cubeGeometryBase = new THREE.BoxGeometry(0.01,0.04,0.06);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:samsung});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.0151,0.79,0);
      
     monitor.add(banco);
      

      var curve = new THREE.SplineCurve3( 
        [new THREE.Vector3( 0, 0, 0 ),
         new THREE.Vector3( 0.1, 0, 0.01 ),
         new THREE.Vector3( 0.1, 0, 0.02 )] );

      var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
      var material = new THREE.MeshLambertMaterial( { map:nero} );
      material.side = THREE.DoubleSide;
      var lathe = new THREE.Mesh( geometry, material );
      lathe.rotation.x=Math.PI/2;
      lathe.scale.set(0.7,1,1);
      lathe.position.set(0,0.36,0)

      monitor.add( lathe );

      //tastiera

      var cubeGeometryBase = new THREE.BoxGeometry(0.4,0.02,0.2);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:tastiera});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.3,0.36,0);
      banco.rotation.y=Math.PI/2;
      monitor.add(banco);
	
    	monitor.feature = this;
    	monitor.name = this.id;
    	var model = Feature.packageModel(monitor);

	return model;
};

module.exports = MonitorPc;