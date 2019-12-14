-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: crawl
-- ------------------------------------------------------
-- Server version	5.7.27-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `subscribe` int(11) DEFAULT NULL,
  `articles` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tags_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'前端','https://lc-gold-cdn.xitu.io/bac28828a49181c34110.png','https://juejin.im/tag/%E5%89%8D%E7%AB%AF',400840,37687),(2,'后端','https://lc-gold-cdn.xitu.io/d83da9d012ddb7ae85f4.png','https://juejin.im/tag/%E5%90%8E%E7%AB%AF',318360,20484),(3,'JavaScript','https://lc-gold-cdn.xitu.io/5d70fd6af940df373834.png','https://juejin.im/tag/JavaScript',299006,30951),(4,'GitHub','https://lc-gold-cdn.xitu.io/0d614af263aa63aa6a77.png','https://juejin.im/tag/GitHub',294021,8338),(5,'架构','https://lc-gold-cdn.xitu.io/f27d811ad7e2b2a0bc24.png','https://juejin.im/tag/%E6%9E%B6%E6%9E%84',254615,6897),(6,'代码规范','https://lc-gold-cdn.xitu.io/cca10b4907aaca2788dd.png','https://juejin.im/tag/%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83',249782,886),(7,'面试','https://lc-gold-cdn.xitu.io/85dd1ce8008458ac220c.png','https://juejin.im/tag/%E9%9D%A2%E8%AF%95',247868,5730),(8,'算法','https://lc-gold-cdn.xitu.io/68a1097944c7fa1d7961.png','https://juejin.im/tag/%E7%AE%97%E6%B3%95',232371,9996),(9,'CSS','https://lc-gold-cdn.xitu.io/66de0c4eb9d10130d5bf.png','https://juejin.im/tag/CSS',225631,7509),(10,'Android','https://lc-gold-cdn.xitu.io/7bab0e1e66ea386e6f94.png','https://juejin.im/tag/Android',222381,28184),(11,'Vue.js','https://lc-gold-cdn.xitu.io/7b5c3eb591b671749fee.png','https://juejin.im/tag/Vue.js',220418,11381),(12,'程序员','https://lc-gold-cdn.xitu.io/63baec1130bde0284e98.png','https://juejin.im/tag/%E7%A8%8B%E5%BA%8F%E5%91%98',217575,8603),(13,'Java','https://lc-gold-cdn.xitu.io/f8ee3cd45f949a546263.png','https://juejin.im/tag/Java',216516,31014),(14,'Node.js','https://lc-gold-cdn.xitu.io/f16f548d25028a1fdd80.png','https://juejin.im/tag/Node.js',212421,7267),(15,'数据库','https://lc-gold-cdn.xitu.io/c57a5426c2a8ab565881.png','https://juejin.im/tag/%E6%95%B0%E6%8D%AE%E5%BA%93',210452,7674),(16,'设计模式','https://lc-gold-cdn.xitu.io/95e6729d56b35272b0d6.png','https://juejin.im/tag/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F',200506,3564),(17,'前端框架','https://lc-gold-cdn.xitu.io/f7a198f1e1aeb6d79878.png','https://juejin.im/tag/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6',196277,2101),(18,'设计','https://lc-gold-cdn.xitu.io/f2e3a6fceb1a4f1ce6b6.png','https://juejin.im/tag/%E8%AE%BE%E8%AE%A1',196195,5591),(19,'HTML','https://lc-gold-cdn.xitu.io/f18965b2a0ef9cac862e.png','https://juejin.im/tag/HTML',189095,3025),(20,'开源','https://lc-gold-cdn.xitu.io/553ecacd498946a9a6d9.png','https://juejin.im/tag/%E5%BC%80%E6%BA%90',178577,4583),(21,'Linux','https://lc-gold-cdn.xitu.io/b49dc843907aa7843a77.png','https://juejin.im/tag/Linux',175840,4284),(22,'React.js','https://lc-gold-cdn.xitu.io/f655215074250f10f8d4.png','https://juejin.im/tag/React.js',172765,8932),(23,'产品','https://lc-gold-cdn.xitu.io/e98ecc945167940d7b6a.png','https://juejin.im/tag/%E4%BA%A7%E5%93%81',172511,10191),(24,'Python','https://lc-gold-cdn.xitu.io/b51a1dacf9bb7883defe.png','https://juejin.im/tag/Python',168989,11510),(25,'Git','https://lc-gold-cdn.xitu.io/3cf1219be35e6fa28229.png','https://juejin.im/tag/Git',168411,2516),(26,'人工智能','https://lc-gold-cdn.xitu.io/9b525117507d7a76c4ac.png','https://juejin.im/tag/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD',158484,8631),(27,'微信小程序','https://lc-gold-cdn.xitu.io/a1e7773920f51db40441.png','https://juejin.im/tag/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F',156891,3847),(28,'iOS','https://user-gold-cdn.xitu.io/155962881259379c25251a455680e3249366e3a3ac373.jpg','https://juejin.im/tag/iOS',156558,16052),(29,'Webpack','https://lc-gold-cdn.xitu.io/73e856b07f83b4231c1e.png','https://juejin.im/tag/Webpack',154377,3239),(30,'全栈','https://lc-gold-cdn.xitu.io/993d9815412ebf9bc888.png','https://juejin.im/tag/%E5%85%A8%E6%A0%88',148806,452),(31,'微信','https://lc-gold-cdn.xitu.io/ceeddfb49045193160bf.png','https://juejin.im/tag/%E5%BE%AE%E4%BF%A1',142957,7436),(32,'ECMAScript 6','https://lc-gold-cdn.xitu.io/e384dbc6d1ab15f046cf.png','https://juejin.im/tag/ECMAScript%206',142792,2032),(33,'MySQL','https://lc-gold-cdn.xitu.io/b2fbb06dce13eeb3bb9b.png','https://juejin.im/tag/MySQL',141202,4033),(34,'HTTP','https://lc-gold-cdn.xitu.io/936251cc1634d8d98959.png','https://juejin.im/tag/HTTP',136676,2186),(35,'Google','https://lc-gold-cdn.xitu.io/dfaa9adfc35ab7476040.png','https://juejin.im/tag/Google',134658,4441),(36,'正则表达式','https://lc-gold-cdn.xitu.io/a000ffae9cc85447cba4.png','https://juejin.im/tag/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F',126460,1669),(37,'机器学习','https://lc-gold-cdn.xitu.io/a066ea8ec92485ff84e8.png','https://juejin.im/tag/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0',121017,3872),(38,'黑客','https://lc-gold-cdn.xitu.io/abd25fb9e6c3941f5ece.png','https://juejin.im/tag/%E9%BB%91%E5%AE%A2',117119,956),(39,'jQuery','https://lc-gold-cdn.xitu.io/6e09f529abe330fc2392.png','https://juejin.im/tag/jQuery',113110,1592),(40,'响应式设计','https://lc-gold-cdn.xitu.io/10a3bb3d26c9d3e19b59.png','https://juejin.im/tag/%E5%93%8D%E5%BA%94%E5%BC%8F%E8%AE%BE%E8%AE%A1',111085,140);
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-04 11:55:14
