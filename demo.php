<?php include_once("header.php"); ?>
<?php
require_once("./entities/product.class.php");
require_once("./entities/category.class.php");
if (isset($_POST["btnSubmit"])) {
    $productName = $_POST["txtName"];
    $cateID = $_POST["txtCateID"];
    $price = $_POST["txtprice"];
    $quantity = $_POST["txtquantity"];
    $description = $_POST["txtdesc"];
    $picture = $_POST["txtpic"];

    $newProduct = new Product($productName, $cateID, $price, $quantity, $description, $picture);
    //luu xuong csdl
    $result = $newProduct->save();
    if (!$result) {
        header("Location: add_product.php?failure");
    } else {
        header("Location: add_product.php?inserted");
    }
}
?>
<?php
if (isset($_GET["inserted"])) {
    echo "<h2>Thêm sản phẩm thành công</h2>";
}
?>
<form method="POST" class="container">
    <h4 class="text-primary">Thêm Sản Phẩm Mới</h4>
    <div class="form-group">
        <div>
            <label for="">Tên sản phẩm</label>
        </div>
        <div>
            <input type="text" name="txtName" value="<?php echo isset($_POST["txtName"]) ? $_POST["txtName"] : "" ?>">
        </div>
    </div>
    <div class="form-group">

        <div>
            <label for="">Mô tả sản phẩm</label>
        </div>
        <div>
            <input type="text" name="txtdesc" value="<?php echo isset($_POST["txtdesc"]) ? $_POST["txtdesc"] : "" ?>">
        </div>
    </div>

    <div class="form-group">
        <div>
            <label for="">Số lượng sản phẩm</label>
        </div>
        <div>
            <input type="number" name="txtquantity" value="<?php echo isset($_POST["txtquantity"]) ? $_POST["txtquantity"] : "" ?>"></div>
    </div>
    <div class="form-group">

        <div>
            <label for="">Giá bán</label>
        </div>
        <div>
            <input type="number" name="txtprice" value="<?php echo isset($_POST["txtprice"]) ? $_POST["txtprice"] : "" ?>"></div>
    </div>

    <div class="form-group">
        <div>
            <label for="">Loại sản phẩm</label>
        </div>
        <select name="txtCateID">
            <option value="" selected>--Chọn loại sản phẩm</option>
            <?php
                $cates= Category::list_category();
                foreach ($cates as $item){
                    echo "<option value=".$item["CateID"].">".$item["CategoryName"]."</option>";
                }
            ?>
        </select>

    </div>
    <div class="form-group">

        <div>
            <label for="">Hình sản phẩm</label>
        </div>
        <div>
            <input type="text" name="txtpic" value="<?php echo isset($_POST["txtpic"]) ? $_POST["txtpic"] : "" ?>">
        </div>
    </div>
    <input type="submit" name="btnSubmit" class="btn btn-success" value="Thêm sản phẩm">
</form>
