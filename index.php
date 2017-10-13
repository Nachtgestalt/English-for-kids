<?php
session_start();
if(!isset($_POST["email"])){	
	$message="Ingresa tu correo";
}

else	{
	$var=trim($_POST["email"]);
	$var1=trim($_POST["pass"]);

	$id_con=mysqli_connect("127.0.0.1:3308", "root", "root", "english_for_kids");

	$sql="select * from usuario where email=\"$var\" and password=\"$var1\"";
	$res=mysqli_query($id_con,$sql);//la concatenacion en variable no lleva puntos

  $message="";
  
	if(mysqli_num_rows($res)==0){
    //$message ="No existe esa consulta";
    echo '<script language="javascript">alert("E-mail y/o password invalidos");</script>'; 
	}

	if(mysqli_num_rows($res)==1){
    $message = "Urra existe esa consulta enviarte a la pagina principal";

    $_SESSION["correo"]=$var;
    $_SESSION["clave"]=$var1;

    $dir= "bienvenida.html";
    mysqli_close($id_con);

    header("Location: $dir");
	}
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>English for kids - login</title>
    <meta charset="UTF-8">
    <meta name="description" content="lenjuage de ingles ">
    <meta name="keywords" content="HTML5, CSS3, JavaScript">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
    <link rel="stylesheet " type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet " type="text/css" href="css/login.css">
  </head>
  
  <body>
    <div class="container h-100 top-30">
      <div class="row h-100 justify-content-center align-items-center">
          <form action="<?php echo $_SERVER["PHP_SELF"]; ?>" method="POST">
              <div class="form-group">
                  <h2>Welcome</h2>
                  <hr>
                  <label for="email">E-mail</label>
                  <input type="text" class="form-control" id="correo" name="email" placeholder="Ingresa tu correo">
              </div>
              <div class="form-group">
                  <label for="formGroupExampleInput2">Password</label>
                  <input type="password" class="form-control" id="clave" name="pass" placeholder="Ingresa tu contraseña">
              </div>
              <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-login">Ingresar</button>
              </div>
              <hr>
              <a href="registro.php" class="text-center">Registrate</a>
          </form>   
      </div>
    </div>
  </body>
</html>
