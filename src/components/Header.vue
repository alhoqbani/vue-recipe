<template>
    <div id="header">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Recipes | وصفات </a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <router-link to="/recipes" tag="li" activeClass="active"><a>All Recipes</a></router-link>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <router-link to="/recipes/create" tag="li" activeClass="active"><a>New Recipe?</a></router-link>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
        <div class="page-header">
            <h2> Welcome to Recipe </h2><small>By: Hamoud Alhoqbani</small>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>