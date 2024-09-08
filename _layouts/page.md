<!DOCTYPE html>
<html lang="en">
    {% include head.html %}
    <body id="page-top" class="index">
    {% include nav-page.md %}
 <!--  Section -->
    <section class="" id="membership">
        <div class="container container-page">
            <div class="row">
                <div class="col-lg-12 text-center heading">
                    <h2>{{page.title}}</h2>
                    <img src="/img/pata2-green.png" alt="">
                </div>
            </div>
            <div class="col-lg-12" id="">     
                {{ content }} 
            </div>
            <div class="row">
                <div class="col-lg-12">
                  
                    
                </div>
            </div>
        </div>
    </section>




    {% include footer.html %}
    {% include modals.html %}
    {% include js.html %}
    </body>
</html>