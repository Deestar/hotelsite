<?php

class PdoConnect{
 protected $dbhost="localhost";
protected $dbUsername="root";
 protected $dbPassword="";
 protected $dbName="rooms";

   protected function connect(){
   $dbinfo= "mysql:host=".$this->dbhost.";dbname=".$this->dbName;
   $pdo = new PDO($dbinfo,$this->dbUsername,$this->dbPassword);
   $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC);
   return $pdo;
   }


}