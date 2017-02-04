<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- force IE browsers in compatibility mode to use their most aggressive rendering engine -->

    <meta charset="utf-8">
    <title>Anuncius Status</title>
    <meta name="description" content="Bienvenido al sistema de monitorizacion en tiempo real e historico de anuncius">

    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">

    <!-- Mobile IE allows us to activate ClearType technology for smoothing fonts for easy reading -->
    <meta http-equiv="cleartype" content="on">

    <link href="/theme/status/css/bootstrap.min.css" media="all" rel="stylesheet" />

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
</head>


<body>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Status</a>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
              <li><a href="https://anunci.us">Go back to anuncius</a></li>
            </ul>
          </div>
        </div>
    </nav>
    
    <section style="padding: 20px">
        <div class="row">
            <div class="col-lg-4">
                <div class="alert alert-dismissible alert-success">
                    <button type="button" class="close" data-dismiss="alert">×</button>
                    <h4>Saludable!</h4>
                    <p>Aunque se han encontrado incidencias, todos los sistemas vitales están funcionando correctamente.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
              <div class="page-header">
                <h1 id="typography">Estado de los sistemas</h1>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <table class="table table-striped table-hover ">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Sistema</th>
                        <th>Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Autentificación por OAUTH</td>
                        <td>Funcionando</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>API REST</td>
                        <td>Funcionando</td>
                      </tr>
                      <tr class="warning">
                        <td>3</td>
                        <td>Especificación de la API REST via Swagger</td>
                        <td>Con incidencias</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Base de datos principal</td>
                        <td>Funcionando</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Base de datos REDIS secundaria</td>
                        <td>Funcionando</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Cifrado de las comunicaciones</td>
                        <td>Funcionando</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Sistema de control de versiones</td>
                        <td>Funcionando</td>
                      </tr>
                    </tbody>
                  </table>
            </div>
        </div>
    </section>
    
    <section>
        <div class="row">
            <div class="col-md-12">
                Última actualización: Sat Feb 4, 12:46
            </div>
        </div>
    </section>
</body>
</html>