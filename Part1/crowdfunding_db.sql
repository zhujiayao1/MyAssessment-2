/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80032 (8.0.32)
 Source Host           : localhost:3306
 Source Schema         : crowdfunding_db

 Target Server Type    : MySQL
 Target Server Version : 80032 (8.0.32)
 File Encoding         : 65001

 Date: 30/09/2024 01:45:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `CATEGORY_ID` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`CATEGORY_ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 'medical');
INSERT INTO `category` VALUES (7, 'crisis relief');
INSERT INTO `category` VALUES (8, 'Animal');
INSERT INTO `category` VALUES (9, 'social impact');

-- ----------------------------
-- Table structure for fundraiser
-- ----------------------------
DROP TABLE IF EXISTS `fundraiser`;
CREATE TABLE `fundraiser`  (
  `FUNDRAISER_ID` int NOT NULL AUTO_INCREMENT,
  `ORGANIZER` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `CAPTION` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `TARGET_FUNDING` decimal(10, 2) NULL DEFAULT NULL,
  `CURRENT_FUNDING` decimal(10, 2) NULL DEFAULT NULL,
  `CITY` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ACTIVE` tinyint(1) NULL DEFAULT 1,
  `CATEGORY_ID` int NULL DEFAULT NULL,
  PRIMARY KEY (`FUNDRAISER_ID`) USING BTREE,
  INDEX `CATEGORY_ID`(`CATEGORY_ID` ASC) USING BTREE,
  CONSTRAINT `fundraiser_ibfk_1` FOREIGN KEY (`CATEGORY_ID`) REFERENCES `category` (`CATEGORY_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of fundraiser
-- ----------------------------
INSERT INTO `fundraiser` VALUES (1, 'Laura Green', 'Aid for Earthquake Victims', 20000.00, 15000.00, 'San Francisco', 1, 7);
INSERT INTO `fundraiser` VALUES (2, 'Michael Lee', 'Animal Rescue Fund', 7000.00, 4000.00, 'Denver', 1, 8);
INSERT INTO `fundraiser` VALUES (3, 'Nina Patel', 'Building Community Gardens', 3000.00, 2500.00, 'Phoenix', 1, 9);
INSERT INTO `fundraiser` VALUES (4, 'Oscar Wilde', 'Support for Homeless Families', 10000.00, 6000.00, 'Atlanta', 1, 9);
INSERT INTO `fundraiser` VALUES (5, 'Penny Lane', 'Water Purification Project', 8000.00, 5000.00, 'Portland', 1, 7);
INSERT INTO `fundraiser` VALUES (6, 'Jackson', 'Help The Jackson\'s Rebuild After Flood)', 100000.00, 7350.00, ' Byron Bay', 1, 7);

SET FOREIGN_KEY_CHECKS = 1;
