function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DbOi_Q4WV/',modelready);
    }
    function modelready(){
        classifier.classify(gotResults);
    
    }
    function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    document.getElementById("result_label").innerHTML = "i can hear - " + results[0].label;
    document.getElementById("result_confidence").innerHTML = "accuracy - " + (results[0].confidence * 100).toFixed(2) + " %";
    
    document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

    document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
    img1 = document.getElementById("animal01");
    img2 = document.getElementById("animal02");
    img3 = document.getElementById("animal03");
    img4 = document.getElementById("animal04");
    if(results[0].label == "meow") 
    {
img1.src = 'domestic_cat_on_a_transparent_background_by_prussiaart_db4akki_fullview.png';
img2.src = 'dog-png-30.png';
img3.src = 'Flying_Bird';
img4.src = '';
    }else if(results[0].label == "bark")
    {
        img1.src = 'aliens-01.png';
img2.src = 'aliens-02.gif';
img3.src = 'aliens-03.png';
img4.src = 'aliens-04.png';
    }else if(results[0].label == "whistle")
    {
        img1.src = 'aliens-01.png';
img2.src = 'aliens-02.png';
img3.src = 'aliens-03.gif';
img4.src = 'aliens-04.png';
    }else if(results[0].label == "hi")
    {
        img1.src = 'aliens-01.png';
img2.src = 'aliens-02.png';
img3.src = 'aliens-03.png';
img4.src = 'aliens-04.gif';
}

}
}
    
    