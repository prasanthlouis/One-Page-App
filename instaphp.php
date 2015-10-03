<?php
if (!empty($_GET['location'])){
  $maps_url = 'https://'.
  'maps.googleapis.com/'.
  'maps/api/geocode/json'.
  '?address=' . urlencode($_GET['location']);
  $maps_json = file_get_contents($maps_url);
  $maps_array = json_decode($maps_json, true);
  $lat = $maps_array['results'][0]['geometry']['location']['lat'];
  $lng = $maps_array['results'][0]['geometry']['location']['lng'];
  $instagram_url = 'https://'.
    'api.instagram.com/v1/media/search' .
    '?lat=' . $lat .
    '&lng=' . $lng .
    '&client_id=abc';
  $instagram_json = file_get_contents($instagram_url);
  $instagram_array = json_decode($instagram_json, true);
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>Insta-Feed</title>
     <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
    <style>
    html{
     width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

    body{
      background:url('http://www.hdwallpaperbackground.com/uploads/allimg/130617/Large%20beautiful%20landscape%20Free%20HD%20wallpapers%204.jpg') center center no-repeat;
          -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width:100%;
        font-family: 'Roboto', sans-serif;
          background-attachment: fixed;
      padding:0;
      margin:0;
    }
    img{
      padding:50px;
    }
    .imageclass{
        margin-left:auto;
  margin-right:auto;

      text-align: center;
    }
    h1{
       font-weight: 100;
      color:white;
      text-align: center;
        padding-top:25%;
          margin-left:auto;
  margin-right:auto;
    }
    button{
      border:1px;
      width:80px;
      height:25px;
      background-color: transparent;
      color:white;
        transition: background-color 0.5s ease;

    }
    button:hover{
      background-color: #6F6FED;
    }
    .formclass{
  margin-left:auto;
  margin-right:auto;
      width:50%;
      text-align: center;
    }
    </style>
  </head>
  <body>
    <h1>INSTA-FEED</h1>
    <div class="formclass">
  <form action="">
    <input type="text" name="location" placeholder="Enter Location" style="width:500px;height:20px"/>
    <button type="submit">Insta-It!</button>
  </form>
    </div>
    <br/>
    <div class="imageclass">
    <?php
    if(!empty($instagram_array)){
      foreach($instagram_array['data'] as $key=>$image){
        echo '<img src="'.$image['images']['standard_resolution']['url'].'" alt=""/><br/>';
      }
    }
    ?>
  </div>
  </body>
</html>
