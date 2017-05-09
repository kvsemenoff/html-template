<?php require_once('includes/header.php'); ?>
<div class="n-wrapper">
	<div class="n-header">
		<?php require_once('includes/header-top.php'); ?>
	</div>
	<div class="n-content">
		<div class="n-content-inner vertical-align">
			<div class="container">
				<div class="row">
					<div class="col-md-9 col-sm-8 col-xs-12 mycolmd">
						<div class="tovars-wrap">
							<?php require_once('includes/tovar.php'); ?>
							<?php require_once('includes/pagination.php'); ?>
						</div>
					</div>	
					<div class="col-md-3 col-sm-4 col-xs-12">
						<?php require_once('includes/sidebar.php'); ?>	
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="n-footer">
		<?php require_once('includes/footer_top.php'); ?>
		<?php require_once('includes/footer_bottom.php'); ?>
	</div>
</div>
</body>
</html>



