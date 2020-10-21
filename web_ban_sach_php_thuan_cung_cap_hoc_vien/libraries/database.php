<?php
class Database{
	public $pdo, $sql, $cursor;
	
	function Database()
	{
		$this->pdo = new PDO("mysql:host=localhost;dbname=ban_sach_online_db","root","");
		$this->pdo->query("SET NAMES utf8");
	}
	
	function setQuery($sql)
	{
		$this->sql = $sql;
	}
	
	function execute($option = array())
	{
		$this->cursor = $this->pdo->prepare($this->sql);
		if($option)
		{
			for($i = 0; $i < count($option); $i++)
			{
				$this->cursor->bindParam($i + 1, $option[$i]);
			}
		}
		$this->cursor->execute();
		return $this->cursor;
	}
	
	function loadAllRow($option = array()){
		if($option)
		{
			if(!$result = $this->execute($option))
			{
				return false;
			}
		}
		else
		{
			if(!$result = $this->execute())
			{
				return false;
			}
		}
		return $result->fetchAll(PDO::FETCH_OBJ);
	}
	
	function loadRow($option = array()){
		if($option)
		{
			if(!$result = $this->execute($option))
			{
				return false;
			}
		}
		else
		{
			if(!$result = $this->execute())
			{
				return false;
			}
		}
		return $result->fetch(PDO::FETCH_OBJ);
	}
	
	function getLastId()
	{
		return $this->pdo->lastInsertId();
	}
	
	function disconect()
	{
		$this->pdo = null;
	}
}
?>