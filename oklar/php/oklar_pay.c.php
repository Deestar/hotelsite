<?php
if (!isset($_GET['price'])) {
    header("location:index.php");
} else {
    include "roomConnect.php";
    class payProcess extends PdoConnect
    {
        public $price;
        private $checkin;
        private $checkout;
        private $status = "processing";
        private $date;

        public function insertIn()
        {
            $this->price = $_GET['price'];
            $this->checkin = $_GET['in'];
            $this->checkout = $_GET['out'];
            $this->date = date("y-m-d");
            $sql = "INSERT INTO payprocess (checkin,checkout,price,Date,status) VALUES   ('$this->checkin','$this->checkout','$this->price','$this->date','$this->status')";
            $stmt = $this->connect()->query($sql);
            if ($stmt) {
                header("location:https://api.whatsapp.com/send?phone=+2348058297273&text=I%20want%20to%20book%20a%20room");
            } else {
                header("location:oklar_room.php?");
            }
        }
    }
    $insert = new payProcess();
    $insert->insertIn();
}
