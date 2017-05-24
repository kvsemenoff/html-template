
 		<!-- across descriptor -->
 		<?php
 		if(isset($_POST['submit'])){
 			$include = $_POST['include'];
 			$block = $_POST['block'];
 			$page = $_POST['page'];
 			if(!empty($include) && !empty($block) && !empty($page)){
 		$res = explode(' ', $include);

 		$file1 = fopen('../index.php', 'w');
 		fwrite($file1, 
 			"<!doctype html>\n<html lang=\"ru\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>Главная</title>\n<?php require_once('includes/header.php'); ?>\n");
 		for($i = 0; $i < count($res); $i++){
 		echo `touch $res[$i]`;
 		fwrite($file1, "<?php require_once('includes/$res[$i]'); ?>"."\n");
 		}
 		fclose($file1);
 		$file2 = fopen('../js/fonts.js', 'w');
 		fwrite($file2, "
 		// $(document).ready(function() {
 		// 	$(\"head\").append('<link href=\"https://fonts.googleapis.com/css?family=PT+Sans&amp;subset=cyrillic\" rel=\"stylesheet\">');
 		// 	$(\"head\").append(\"<link href='//netdna.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.css' rel='stylesheet'>\");
 		// }); 
 		");
 		fclose($file2);
 		$file3 = fopen('footer.php', 'w');
 		fwrite($file3, "
 		<!-- JS_BLOCK -->
 		<script src=\"libs/jquery/jquery-1.11.1.min.js\"></script>
 		<script src=\"libs/owl.carousel/owl.carousel.js\"></script>
 		<script src=\"libs/fancybox/jquery.fancybox.pack.js\"></script>
 		<script type=\"text/javascript\" src=\"js/jquery.mousewheel.js\"></script>
 		<script src=\"js/jquery.maskedinput.min.js\"></script>
 		<script src=\"js/fonts.js\"></script>
 		<script src=\"js/common.js\"></script>\n
 		");
 		fclose($file3);
 
 		$res2 = explode(' ', $block);
 		for($i = 0; $i < count($res2); $i++){
 			mkdir('../block/'.$res2[$i], 0700);
 			touch('../block/'.$res2[$i].'/index.html');
 			touch('../block/'.$res2[$i].'/style.scss');
 			touch('../block/'.$res2[$i].'/script.js');
 			$file4 = fopen('header.php', 'a');
 				fwrite($file4, "<link rel=\"stylesheet\" href=\"block/".$res2[$i]."/style.css\">\n");
 			fclose($file4);
 			$file5 = fopen('footer.php', 'a');
 				fwrite($file5, "<script src=\"block/".$res2[$i]."/script.js\"></script>\n");
 			fclose($file5);
 		}
 		$file6 = fopen('header.php', 'a');
 			fwrite($file6, "\n</head>\n<body class=\"body\">");
 			fclose($file6);
 		$file7 = fopen('footer.php', 'a');
 			fwrite($file7, "\n</body>\n</html>");
 		fclose($file7);

 		$res3 = explode(' ', $page);
 		for($i = 0; $i < count($res3); $i++){
 			touch('../'.$res3[$i]);
 			$file8 = fopen("../$res3[$i]", "w");
 			fwrite($file8, 
 				"<!doctype html>
				 <html lang=\"ru\">
				 <head>
				 <meta charset=\"UTF-8\">
				 <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
		         <title></title>\n");
 			fwrite($file8, 
 				"<?php require_once('includes/header.php'); ?>
				 <div class=\"n-wrapper\">
				 	<div class=\"n-header\">
				 		<?php require_once('includes/header-top.php'); ?>
				 	</div>
	 			 	<div class=\"n-content\">
				 	<div class=\"n-content-inner vertical-align newsbgimg\">

				 	</div>
				 	</div>
				 	<div class=\"n-footer\">
				 		<?php require_once('includes/footer.php'); ?>
	             	</div>
			     </div>");
 			fclose($file8);
 		}
 		$msg = "Успех";
 		}
 		else{
 			$msg = "Заполните пожалуйста все поля";
 		}
 	}
 		?>
 		<!-- HTML FORM -->
 		<h1 style="text-align: center">Создание страниц</h1>
 		<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" style="width: 250px; margin:0 auto">
 		<?php echo $msg; ?><br><br>
 			<textarea name="include" cols="40" rows="4" placeholder="Инклюды"><?php if(!empty($include)) echo $include; ?></textarea><br><br>
 			<textarea name="block"  cols="40" rows="4" placeholder="Блоки"><?php if(!empty($block)) echo $block;?></textarea><br><br>
 			<textarea name="page"  cols="40" rows="4" placeholder="Страницы"><?php if(!empty($page)) echo $page ?></textarea><br><br>
 			<input type="submit" name="submit" value="Создать" style="margin-left: 50%;">
 		</form>

 		
