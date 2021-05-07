$(`#botao`).click(function() {

    $.ajax({
        url: 'https://api.nasa.gov/planetary/apod?api_key=jKwCWbiQxgW4Kk4mZW5PKc8EaWV2AwzxhGIv7ehv&date='+$("#data").val(),
        success: function(result) {

            if(result.media_type == '"image"'){


                $('#titulo').html(result.explanation);
    
                $('#foto').html(`<img src="${result.url}">`);
    
                $('#copyright').html(result.copyright);
            }

            else{
    
                $('#titulo').html(result.explanation);
    
                $('#foto').html(`<iframe src="${result.url}">`)
    
                $('#copyright').html(result.copyright);
            }
            }

            });
        })
