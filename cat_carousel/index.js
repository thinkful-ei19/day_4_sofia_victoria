// your code here
console.log("Hello World!");
$(".thumbnail").on('click', function(event){
    // Retrieve value of src attribute on my event.target 
    // Set value of src attribute on image inside heroe class to the value above
    let imgsrc = $(event.target).attr('src');

    $(".hero").find('img').attr('src', imgsrc);

    console.log(imgsrc);
    console.log(event.target);

  });
  
  