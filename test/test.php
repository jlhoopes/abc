<?php
$_SESSION_START;
$_SESSION["email"] = 'test@me.com';
$_SESSION["name"] = 'Jason Hoopes';
$_SESSION["age"] = 37;


// recursively reduces deep arrays to single-dimensional arrays
// $preserve_keys: (0=>never, 1=>strings, 2=>always)
function array_flatten($array, $preserve_keys = 1, &$newArray = Array()) {
  foreach ($array as $key => $child) {
    if (is_array($child)) {
      $newArray =& array_flatten($child, $preserve_keys, $newArray);
    } elseif ($preserve_keys + is_string($key) > 1) {
      $newArray[$key] = $child;
    } else {
      $newArray[] = $child;
    }
  }
  return $newArray;
}

var_dump(array_flatten($_SESSION,2));
echo "</br>";
for ($i = 0; $i <  count($_SESSION); $i++) {
    $key=key($_SESSION);
    $val=$_SESSION[$key];
    if ($val<> ' ') {
       echo $key ." = ".  $val ." <br> ";
       }
     next($_SESSION);
 }
?>
