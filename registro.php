<?php
if(!isset($_POST["email"])){	
	$mensaje="Ingresa tu correo";
	//echo $mensaje;
}else{

	$var1=trim($_POST["username"]);
	$var3=trim($_POST["email"]);
	$var4=trim($_POST["pass"]);
	$var5=trim($_POST["birthday"]);

	//validacion correo, que aun no este 
	//validacion contrase�a igual	

	$id_con=mysqli_connect("127.0.0.1:3308", "root", "root", "english_for_kids");

	$sql="select email from usuario where email=\"$var3\"";
	$res=mysqli_query($id_con,$sql);//la concatenacion en variable no lleva puntos

	if(mysqli_num_rows($res)==0){
            //$sql="select nombre from alumno where alumno.nombre=\"$var1\" and alumno.clave=\"$var2\"";
            $sql="insert into usuario(`email`,`password`,`username`,`birthday`) values(\"$var3\",\"$var4\",\"$var1\",'asd')";
            if ($id_con->query($sql) === TRUE) {
                echo "New record created successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
            // $sql="insert into usuario values(\"$var3\",\"$var4\",\"$var1\",'asd')";
            // $res=mysqli_query($id_con,$sql);//la concatenacion en variable no lleva puntos
            
            echo "Redireccionar  ;P";
            $mensaje="Claro registrado ;P";
            
            $dir= "index.php";
            header("Location: $dir");
	} else {
	$mensaje="No puedes utilizar ese correo ya esta registrado";
	echo $mensaje;
	}
}

?>

<!DOCTYPE html>
<html lang="es">
    <head>
        <meta content="text/html; charset=iso-8859-1" http-equiv="content-type">
        <meta name="description" content="lenjuage de ingles ">
        <meta name="keywords" content="HTML5, CSS3, JavaScript">
        <title> Registro - English for kids </title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
        <link rel="stylesheet " type="text/css" href="css/bootstrap.css">
        <link rel="stylesheet " type="text/css" href="css/login.css">
    </head>
	<body>
    <div class="container h-100 top-30">
      <div class="row h-100 justify-content-center align-items-center">
          <form action="<?php echo $_SERVER["PHP_SELF"]; ?>" method="POST">
              <div class="form-group">
                  <h2>Registro</h2>
                  <hr>
                  <label for="username">Username</label>
                  <input type="text" class="form-control" id="usuario" name="username" placeholder="Ingresa tu nombre de usuario">
              </div>
			  <div class="form-group">
                  <label for="email">E-mail</label>
                  <input type="text" class="form-control" id="correo" name="email" placeholder="Ingresa tu correo">
              </div>
              <div class="form-group">
                  <label for="pass">Password</label>
                  <input type="text" class="form-control" id="clave" name="pass" placeholder="Ingresa tu contraseña">
              </div>
			  <div class="form-group">
                  <label for="fechaNacimiento">Birthday date</label>
                  <input type="date" class="form-control" id="fechaNacimiento" name="birthday" placeholder="Ingresa tu fecha de nacimiento">
              </div>
              <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-login">Registrar</button>
              </div>
              <hr>
              <a href="index.php" class="a-iniciar-sesion">Iniciar sesión</a>
          </form>   
      </div>
    </div>
  </body>
</html>
