-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 03, 2023 at 03:37 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `printpass`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth`
--

CREATE TABLE `auth` (
  `id` bigint(15) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `isVerified` tinyint(4) NOT NULL DEFAULT 0,
  `isAdmin` tinyint(4) NOT NULL DEFAULT 0,
  `authToken` text NOT NULL,
  `loginLog` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '{"lastLogin":"","newLogin":""}',
  `updatedAt` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth`
--

INSERT INTO `auth` (`id`, `name`, `email`, `password`, `isVerified`, `isAdmin`, `authToken`, `loginLog`, `updatedAt`) VALUES
(100000000000119, 'Megha Das', 'cowiniw908@dicopto.com', '$2b$10$GeLqbS7LkaLwlLvf1kSe1OEW8.H0ZmYE/1gpNXvLCbDnu5ReAhieK', 1, 1, '8zeayq7AIv8QSAGUcYWSPos4j2K13HvmLBu3Cf21dXnUIYhYA9tUO9zvDSflP', '{\"lastLogin\":\"Tue Feb 07 2023 18:14:24 GMT+0530 (India Standard Time)\",\"newLogin\":\"Tue Feb 07 2023 18:26:52 GMT+0530 (India Standard Time)\"}', 'Wed Nov 23 2022 18:38:57 GMT+0530 (India Standard Time)'),
(100000000000122, 'eScan Mobile ', 'kahof14166@24rumen.com', '$2b$10$TS.FlPrhQtD1XpldZxwSDe9oLH/kvyum32MpQt7dnAOyJfzik4Vfy', 1, 0, '', '{\"lastLogin\":\"Sun Nov 13 2022 21:39:50 GMT+0530 (India Standard Time)\",\"newLogin\":\"Sun Nov 13 2022 21:42:01 GMT+0530 (India Standard Time)\"}', ''),
(100000000000125, 'Abhishek Kumar', 'jotika3304@3mkz.com', '$2b$10$pLm3i6Qw4SLG1JpDrSsaW.8VAbY3RahFzRMKhD.sfeBu9cyDUzxFa', 1, 0, '', '{\"lastLogin\":\"Sun Nov 13 2022 23:36:03 GMT+0530 (India Standard Time)\",\"newLogin\":\"Tue Feb 07 2023 18:26:12 GMT+0530 (India Standard Time)\"}', 'Wed Nov 09 2022 20:50:02 GMT+0530 (India Standard Time)'),
(100000000000128, 'Abhishek Kumar', 'jotikadff04@3mkz.com', '$2b$10$JSMpHNoQ/60NJbuzcfd3gOH0.mcerAwZC2wzDov9le/L9wbTN7jnq', 0, 0, 'wU792BXLiIsBHMbCZgImQuXXxuJR2n6xQPWYzOAvIHnBK7kbb2yAc29ArtU15', '{\"lastLogin\":\"\",\"newLogin\":\"\"}', ''),
(100000000000131, 'piyush', 'ilovepiyushji@gmail.com', '$2b$10$sls3vqkZiXER9h3pYrJPxO2YuB.fUQh6mfhUvwY6A0MWp.TROr3Ke', 1, 0, '', '{\"lastLogin\":\"Fri Mar 03 2023 19:51:16 GMT+0530 (India Standard Time)\",\"newLogin\":\"Fri Mar 03 2023 19:51:46 GMT+0530 (India Standard Time)\"}', 'Sun Nov 13 2022 18:02:12 GMT+0530 (India Standard Time)'),
(100000000000196, 'New Admin', 'new@admin', '$2b$10$0eJtwgPGqOEI6SfFL5sf6OPahA7eAOqrE1LAkLuC2eJwN2nB4P/q6', 1, 1, 'ARnXUvv4afIIEwfrNveUAJxbsWSHk5TGZKA8Mvb5WfZ8cgND1RGkysiEReWuP', '{\"lastLogin\":\"Sat Nov 12 2022 20:05:07 GMT+0530 (India Standard Time)\",\"newLogin\":\"Sun Nov 13 2022 19:35:19 GMT+0530 (India Standard Time)\"}', ''),
(100000000000200, 'nnnnn', 'ksdkdls@kkke', '$2b$10$RhHfxZp6cVfLKDpwewk59O3ROQmUcJbzivr3hOzIEL9OB/ZclFqMq', 1, 0, 'ONVKTC3FoMgqvmQpt3TdbhkjEsXLtLGQBHZHZGwjrLPYRFZWnqpVjW3wbJPU8', '{\"lastLogin\":\"Sat Nov 12 2022 20:13:19 GMT+0530 (India Standard Time)\",\"newLogin\":\"Sun Nov 13 2022 20:03:47 GMT+0530 (India Standard Time)\"}', 'Sun Nov 13 2022 23:16:31 GMT+0530 (India Standard Time)'),
(100000000000201, '', '', '$2b$10$fFABpATmzhz5o0YpHrKebeFj8r7GUPFZT0e.lUUnLfWKnoQxQ.Tw.', 0, 0, 'ral9qeug3alYIgXECFDvwAzYQudgVrWfgYr8Wla6oNdKFZKbijhuVrnPr2XWP', '{\"lastLogin\":\"\",\"newLogin\":\"\"}', ''),
(100000000000204, 'df', 'gigevo2665@crtsec.com', '$2b$10$mCH9LHZeq1DOC.1DYL8Vyun/rTYLkve1oWbCAHZqSQzBivoekgmSy', 0, 0, 'IBDF9wQvGBo8xX6Sj4PdHkoztt4Z6rrjWquz7kmw6eZk9p2YOoJkF28TgJtXv', '{\"lastLogin\":\"\",\"newLogin\":\"\"}', ''),
(100000000000205, 'Abhishek Kumar', 'vomebi7705@otanhome.com', '$2b$10$VWZK8IYAQf3kOzbcRiP.SeZpLFdrkLdAwQoH7.H1z79AluidvR7VW', 1, 0, '', '{\"lastLogin\":\"\",\"newLogin\":\"Mon Feb 20 2023 18:52:21 GMT+0530 (India Standard Time)\"}', '');

-- --------------------------------------------------------

--
-- Table structure for table `deletedusers`
--

CREATE TABLE `deletedusers` (
  `id` bigint(20) NOT NULL,
  `userData` mediumtext NOT NULL,
  `deletedAt` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `deletedusers`
--

INSERT INTO `deletedusers` (`id`, `userData`, `deletedAt`) VALUES
(100000000000172, '{\"ID\":100000000000172,\"name\":\"User 24\",\"email\":\"sbi.24@onlinemail.com\",\"mobile\":155082713,\"cspName\":\"Csp Name24\",\"cspCode\":\"Csp Code24\",\"cspLocation\":\"Csp Location24\",\"adhaar\":8943249456,\"pan\":\"PAN24\",\"branchName\":\"Baijnathpur24\",\"branchCode\":\"25\",\"ifsc\":\"SBIN00000024\",\"city\":\"Saharsa24\",\"branchEmail\":\"branchEmail24@sbi.co.in\",\"branchPhone\":\"1713866095\",\"micr\":\"8729001\",\"createdAt\":\"Tue Nov 08 2022 23:17:33 GMT+0530 (India Standard Time)\",\"updatedAt\":\"Tue Nov 08 2022 23:17:33 GMT+0530 (India Standard Time)\",\"isAdmin\":0,\"isVerified\":0}', 'Sun Feb 05 2023 19:02:06 GMT+0530 (India Standard Time)'),
(100000000000173, '{\"ID\":100000000000173,\"name\":\"User 79\",\"email\":\"sbi.79@onlinemail.com\",\"mobile\":2374825259,\"cspName\":\"Csp Name79\",\"cspCode\":\"Csp Code79\",\"cspLocation\":\"Csp Location79\",\"adhaar\":8943249511,\"pan\":\"PAN79\",\"branchName\":\"Baijnathpur79\",\"branchCode\":\"80\",\"ifsc\":\"SBIN00000079\",\"city\":\"Saharsa79\",\"branchEmail\":\"branchEmail79@sbi.co.in\",\"branchPhone\":\"415038997\",\"micr\":\"8729001\",\"createdAt\":\"Tue Nov 08 2022 23:17:34 GMT+0530 (India Standard Time)\",\"updatedAt\":\"Tue Nov 08 2022 23:17:34 GMT+0530 (India Standard Time)\",\"isAdmin\":0,\"isVerified\":0}', 'Fri Nov 25 2022 18:01:25 GMT+0530 (India Standard Time)'),
(100000000000175, '{\"ID\":100000000000175,\"name\":\"User 65\",\"email\":\"sbi.65@onlinemail.com\",\"mobile\":1481867717,\"cspName\":\"Csp Name65\",\"cspCode\":\"Csp Code65\",\"cspLocation\":\"Csp Location65\",\"adhaar\":8943249497,\"pan\":\"PAN65\",\"branchName\":\"Baijnathpur65\",\"branchCode\":\"66\",\"ifsc\":\"SBIN00000065\",\"city\":\"Saharsa65\",\"branchEmail\":\"branchEmail65@sbi.co.in\",\"branchPhone\":\"6599717328\",\"micr\":\"8729001\",\"createdAt\":\"Tue Nov 08 2022 23:17:36 GMT+0530 (India Standard Time)\",\"updatedAt\":\"Tue Nov 08 2022 23:17:36 GMT+0530 (India Standard Time)\",\"isAdmin\":0,\"isVerified\":0}', 'Sun Nov 13 2022 18:51:41 GMT+0530 (India Standard Time)'),
(100000000000176, '{\"ID\":100000000000176,\"name\":\"User 13\",\"email\":\"sbi.13@onlinemail.com\",\"mobile\":8935190824,\"cspName\":\"Csp Name13\",\"cspCode\":\"Csp Code13\",\"cspLocation\":\"Csp Location13\",\"adhaar\":8943249445,\"pan\":\"PAN13\",\"branchName\":\"Baijnathpur13\",\"branchCode\":\"14\",\"ifsc\":\"SBIN00000013\",\"city\":\"Saharsa13\",\"branchEmail\":\"branchEmail13@sbi.co.in\",\"branchPhone\":\"2177181011\",\"micr\":\"8729001\",\"createdAt\":\"Tue Nov 08 2022 23:17:37 GMT+0530 (India Standard Time)\",\"updatedAt\":\"Tue Nov 08 2022 23:17:37 GMT+0530 (India Standard Time)\",\"isAdmin\":0,\"isVerified\":0}', 'Sun Nov 13 2022 18:18:20 GMT+0530 (India Standard Time)'),
(100000000000177, '{\"ID\":100000000000177,\"name\":\"User 93\",\"email\":\"sbi.93@onlinemail.com\",\"mobile\":3542751674,\"cspName\":\"Csp Name93\",\"cspCode\":\"Csp Code93\",\"cspLocation\":\"Csp Location93\",\"adhaar\":8943249525,\"pan\":\"PAN93\",\"branchName\":\"Baijnathpur93\",\"branchCode\":\"94\",\"ifsc\":\"SBIN00000093\",\"city\":\"Saharsa93\",\"branchEmail\":\"branchEmail93@sbi.co.in\",\"branchPhone\":\"6477216569\",\"micr\":\"8729001\",\"createdAt\":\"Tue Nov 08 2022 23:17:38 GMT+0530 (India Standard Time)\",\"updatedAt\":\"Tue Nov 08 2022 23:17:38 GMT+0530 (India Standard Time)\",\"isAdmin\":0,\"isVerified\":0}', 'Sun Nov 13 2022 18:08:17 GMT+0530 (India Standard Time)'),
(100000000000178, '{\"ID\":100000000000178,\"name\":\"User 97\",\"email\":\"sbi.97@onlinemail.com\",\"mobile\":4397787021,\"cspName\":\"Csp Name97\",\"cspCode\":\"Csp Code97\",\"cspLocation\":\"Csp Location97\",\"adhaar\":8943249529,\"pan\":\"PAN97\",\"branchName\":\"Baijnathpur97\",\"branchCode\":\"98\",\"ifsc\":\"SBIN00000097\",\"city\":\"Saharsa97\",\"branchEmail\":\"branchEmail97@sbi.co.in\",\"branchPhone\":\"8407917403\",\"micr\":\"8729001\",\"createdAt\":\"Tue Nov 08 2022 23:17:39 GMT+0530 (India Standard Time)\",\"updatedAt\":\"Tue Nov 08 2022 23:17:39 GMT+0530 (India Standard Time)\",\"isAdmin\":0,\"isVerified\":0}', 'Sun Nov 13 2022 18:05:50 GMT+0530 (India Standard Time)'),
(100000000000179, '{\"ID\":100000000000179,\"name\":\"User 62\",\"email\":\"sbi.62@onlinemail.com\",\"mobile\":7738320292,\"cspName\":\"Csp Name62\",\"cspCode\":\"Csp Code62\",\"cspLocation\":\"Csp Location62\",\"adhaar\":8943249494,\"pan\":\"PAN62\",\"branchName\":\"Baijnathpur62\",\"branchCode\":\"63\",\"ifsc\":\"SBIN00000062\",\"city\":\"Saharsa62\",\"branchEmail\":\"branchEmail62@sbi.co.in\",\"branchPhone\":\"3388576570\",\"micr\":\"8729001\",\"createdAt\":\"Tue Nov 08 2022 23:17:40 GMT+0530 (India Standard Time)\",\"updatedAt\":\"Tue Nov 08 2022 23:17:40 GMT+0530 (India Standard Time)\",\"isAdmin\":0,\"isVerified\":0}', 'Sun Nov 13 2022 00:17:47 GMT+0530 (India Standard Time)'),
(100000000000180, '{\"ID\":100000000000180,\"name\":\"User 60\",\"email\":\"sbi.60@onlinemail.com\",\"mobile\":8745941066,\"cspName\":\"Csp Name60\",\"cspCode\":\"Csp Code60\",\"cspLocation\":\"Csp Location60\",\"adhaar\":8943249492,\"pan\":\"PAN60\",\"branchName\":\"Baijnathpur60\",\"branchCode\":\"61\",\"ifsc\":\"SBIN00000060\",\"city\":\"Saharsa60\",\"branchEmail\":\"branchEmail60@sbi.co.in\",\"branchPhone\":\"349371733\",\"micr\":\"8729001\",\"createdAt\":\"Tue Nov 08 2022 23:17:41 GMT+0530 (India Standard Time)\",\"updatedAt\":\"Tue Nov 08 2022 23:17:41 GMT+0530 (India Standard Time)\",\"isAdmin\":0,\"isVerified\":0}', 'Sun Nov 13 2022 00:16:47 GMT+0530 (India Standard Time)'),
(100000000000183, '{\"ID\":100000000000183,\"name\":\"User 3\",\"email\":\"sbi.3@onlinemail.com\",\"mobile\":652845819,\"cspName\":\"Csp Name3\",\"cspCode\":\"Csp Code3\",\"cspLocation\":\"Csp Location3\",\"adhaar\":8943249435,\"pan\":\"PAN3\",\"branchName\":\"Baijnathpur3\",\"branchCode\":\"4\",\"ifsc\":\"SBIN0000003\",\"city\":\"Saharsa3\",\"branchEmail\":\"branchEmail3@sbi.co.in\",\"branchPhone\":\"7579347897\",\"micr\":\"8729001\",\"createdAt\":\"Tue Nov 08 2022 23:17:44 GMT+0530 (India Standard Time)\",\"updatedAt\":\"Tue Nov 08 2022 23:17:44 GMT+0530 (India Standard Time)\",\"isAdmin\":0,\"isVerified\":0}', 'Sat Nov 12 2022 23:23:12 GMT+0530 (India Standard Time)'),
(100000000000185, '{\"ID\":100000000000185,\"name\":\"User 12\",\"email\":\"sbi.12@onlinemail.com\",\"mobile\":8864327981,\"cspName\":\"Csp Name12\",\"cspCode\":\"Csp Code12\",\"cspLocation\":\"Csp Location12\",\"adhaar\":8943249444,\"pan\":\"PAN12\",\"branchName\":\"Baijnathpur12\",\"branchCode\":\"13\",\"ifsc\":\"SBIN00000012\",\"city\":\"Saharsa12\",\"branchEmail\":\"branchEmail12@sbi.co.in\",\"branchPhone\":\"3277862878\",\"micr\":\"8729001\",\"createdAt\":\"Tue Nov 08 2022 23:17:46 GMT+0530 (India Standard Time)\",\"updatedAt\":\"Tue Nov 08 2022 23:17:46 GMT+0530 (India Standard Time)\",\"isAdmin\":0,\"isVerified\":0}', 'Sat Nov 12 2022 22:53:15 GMT+0530 (India Standard Time)'),
(100000000000197, '{\"ID\":100000000000197,\"name\":\"nnnnn\",\"email\":\"ksdkdls@kkk\",\"mobile\":99009,\"cspName\":\";jlj\",\"cspCode\":\"kjkj\",\"cspLocation\":\"klj;k\",\"adhaar\":809809,\"pan\":\"klj09\",\"branchName\":\"0lkjl;\",\"branchCode\":\"kjhjh\",\"ifsc\":\"jlkhkljhkjlh\",\"city\":\"jhlhklhl\",\"branchEmail\":\"jkhlh@jhjkj\",\"branchPhone\":\"9807\",\"micr\":\"kjljk\",\"createdAt\":\"Sat Nov 12 2022 20:09:28 GMT+0530 (India Standard Time)\",\"updatedAt\":\"Sat Nov 12 2022 20:09:28 GMT+0530 (India Standard Time)\",\"isAdmin\":0,\"isVerified\":0}', 'Sun Nov 13 2022 23:28:14 GMT+0530 (India Standard Time)');

-- --------------------------------------------------------

--
-- Table structure for table `printed`
--

CREATE TABLE `printed` (
  `id` bigint(20) NOT NULL,
  `data` text NOT NULL,
  `date` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `printed`
--

INSERT INTO `printed` (`id`, `data`, `date`) VALUES
(100000000000122, '[{\"cif\":\"\",\"account\":\"\",\"accountType\":\"Saving\",\"title\":\"Mr\",\"customerName\":\"\",\"guardian\":\"\",\"pan\":\"\",\"mobile\":\"\",\"doi\":\"undefined/undefined/\",\"village\":\"\",\"distt\":\"\",\"state\":\"\",\"pin\":\"\"},{\"branch\":{\"ID\":100000000000122,\"name\":\"eScan Mobile \",\"email\":\"kahof14166@24rumen.com\",\"mobile\":33,\"cspName\":\"\",\"cspCode\":\"as\",\"cspLocation\":\"\",\"adhaar\":23,\"pan\":\"2sa\",\"branchName\":\"\",\"branchCode\":\"\",\"ifsc\":\"\",\"city\":\"\",\"branchEmail\":\"\",\"branchPhone\":\"\",\"micr\":\"\",\"createdAt\":\"Wed Oct 26 2022 21:45:09 GMT+0530 (India Standard Time)\",\"updatedAt\":\"Wed Oct 26 2022 21:46:19 GMT+0530 (India Standard Time)\",\"isAdmin\":0,\"isVerified\":1}}]', ''),
(100000000000125, '[{\"cif\":\"\",\"account\":\"\",\"accountType\":\"Saving\",\"title\":\"Mr\",\"customerName\":\"\",\"guardian\":\"\",\"pan\":\"\",\"mobile\":\"\",\"doi\":\"undefined/undefined/\",\"village\":\"\",\"distt\":\"\",\"state\":\"\",\"pin\":\"\"},{\"branch\":{\"ID\":100000000000125,\"name\":\"Abhishek Kumar\",\"email\":\"jotika3304@3mkz.com\",\"mobile\":2333,\"cspName\":\"as\",\"cspCode\":\"as1\",\"cspLocation\":\"\",\"adhaar\":322,\"pan\":\"444s\",\"branchName\":\"\",\"branchCode\":\"\",\"ifsc\":\"\",\"city\":\"\",\"branchEmail\":\"\",\"branchPhone\":\"\",\"micr\":\"\",\"createdAt\":\"Sat Oct 29 2022 17:36:09 GMT+0530 (India Standard Time)\",\"updatedAt\":\"Sat Oct 29 2022 18:41:07 GMT+0530 (India Standard Time)\",\"isAdmin\":0,\"isVerified\":1}}]', ''),
(100000000000200, '[{\"cif\":\"\",\"account\":\"\",\"accountType\":\"Saving\",\"title\":\"Mr\",\"customerName\":\"\",\"guardian\":\"\",\"pan\":\"\",\"mobile\":\"\",\"doi\":\"undefined/undefined/\",\"village\":\"\",\"distt\":\"\",\"state\":\"\",\"pin\":\"\"},{\"branch\":{\"ID\":100000000000200,\"name\":\"nnnnn\",\"email\":\"ksdkdls@kkke\",\"mobile\":990093,\"cspName\":\";jlj\",\"cspCode\":\"kjkje\",\"cspLocation\":\"klj;k\",\"adhaar\":80980934,\"pan\":\"klj09ds\",\"branchName\":\"0lkjl;\",\"branchCode\":\"kjhjh\",\"ifsc\":\"jlkhkljhkjlh\",\"city\":\"jhlhklhl\",\"branchEmail\":\"jkhlh@jhjkj\",\"branchPhone\":\"9807\",\"micr\":\"kjljk\",\"createdAt\":\"Sat Nov 12 2022 20:11:07 GMT+0530 (India Standard Time)\",\"updatedAt\":\"Sat Nov 12 2022 20:11:07 GMT+0530 (India Standard Time)\",\"isAdmin\":0,\"isVerified\":1}}]', ''),
(100000000000131, '[{\"cif\":\"345234\",\"account\":\"234234\",\"accountType\":\"Saving\",\"title\":\"Mr\",\"customerName\":\"sdf\",\"guardian\":\"sdf\",\"pan\":\"sdf\",\"mobile\":\"3223\",\"doi\":\"09/02/2023\",\"village\":\"sdf\",\"distt\":\"sdf\",\"state\":\"sdf\",\"pin\":\"sdf\"},{\"branch\":{\"ID\":100000000000131,\"name\":\"Piyush Kumar\",\"email\":\"ilovepiyushji@gmail.com\",\"mobile\":9199530353,\"cspName\":\"Priti Rani\",\"cspCode\":\"1A77E398\",\"cspLocation\":\"Saur Bazar\",\"adhaar\":888075993676,\"pan\":\"POSJO5269J\",\"branchName\":\"BAIJNATHPUR\",\"branchCode\":\"12645\",\"ifsc\":\"SBIN0012645\",\"city\":\"BAIJNATHPUR\",\"branchEmail\":\"sbi.12645@sbi.co.in\",\"branchPhone\":\"9771416355\",\"micr\":\"12645645\",\"createdAt\":\"Sat Oct 29 2022 21:06:32 GMT+0530 (India Standard Time)\",\"updatedAt\":\"Sun Nov 13 2022 23:32:59 GMT+0530 (India Standard Time)\",\"isAdmin\":0,\"isVerified\":1}}]', ''),
(100000000000131, '[{\"cif\":\"59\",\"account\":\"9\",\"accountType\":\"Saving\",\"title\":\"Mr\",\"customerName\":\"ASS\",\"guardian\":\"dfgSD\",\"pan\":\"GD\",\"mobile\":\"34\",\"doi\":\"03/02/2023\",\"village\":\"Saur Bazar\",\"distt\":\"sdf\",\"state\":\"sA\",\"pin\":\"34\"},{\"branch\":{\"ID\":100000000000131,\"name\":\"Piyush Kumar\",\"email\":\"ilovepiyushji@gmail.com\",\"mobile\":9199530353,\"cspName\":\"Priti Rani\",\"cspCode\":\"1A77E398\",\"cspLocation\":\"Saur Bazar\",\"adhaar\":888075993676,\"pan\":\"POSJO5269J\",\"branchName\":\"BAIJNATHPUR\",\"branchCode\":\"12645\",\"ifsc\":\"SBIN0012645\",\"city\":\"BAIJNATHPUR\",\"branchEmail\":\"sbi.12645@sbi.co.in\",\"branchPhone\":\"9771416355\",\"micr\":\"12645645\",\"createdAt\":\"Sat Oct 29 2022 21:06:32 GMT+0530 (India Standard Time)\",\"updatedAt\":\"Sun Nov 13 2022 23:32:59 GMT+0530 (India Standard Time)\",\"isAdmin\":0,\"isVerified\":1}}]', ''),
(100000000000131, '[{\"cif\":\"\",\"account\":\"\",\"accountType\":\"Saving\",\"title\":\"Mr\",\"customerName\":\"\",\"guardian\":\"\",\"pan\":\"\",\"mobile\":\"\",\"doi\":\"undefined/undefined/\",\"village\":\"\",\"distt\":\"\"},{\"branch\":{\"ID\":100000000000131,\"name\":\"Piyush Kumar\",\"email\":\"ilovepiyushji@gmail.com\",\"mobile\":9199530353,\"branchName\":\"BAIJNATHPUR\",\"branchAddress\":\"\",\"branchCode\":\"12645\",\"ifsc\":\"SBIN0012645\",\"city\":\"BAIJNATHPUR\",\"branchEmail\":\"sbi.12645@sbi.co.in\",\"branchPhone\":\"9771416355\",\"micr\":\"12645645\",\"createdAt\":\"Sat Oct 29 2022 21:06:32 GMT+0530 (India Standard Time)\",\"updatedAt\":\"Sun Nov 13 2022 23:32:59 GMT+0530 (India Standard Time)\",\"isAdmin\":0,\"isVerified\":1}}]', ''),
(100000000000131, '[{\"cif\":\"\",\"account\":\"\",\"accountType\":\"Saving\",\"title\":\"Mr\",\"customerName\":\"\",\"guardian\":\"\",\"pan\":\"\",\"mobile\":\"\",\"doi\":\"undefined/undefined/\",\"village\":\"\",\"distt\":\"\"},{\"branch\":{\"ID\":100000000000131,\"name\":\"Piyush Kumar\",\"email\":\"ilovepiyushji@gmail.com\",\"mobile\":9199530353,\"branchName\":\"BAIJNATHPUR\",\"branchAddress\":\"\",\"branchCode\":\"12645\",\"ifsc\":\"SBIN0012645\",\"city\":\"BAIJNATHPUR\",\"branchEmail\":\"sbi.12645@sbi.co.in\",\"branchPhone\":\"9771416355\",\"micr\":\"12645645\",\"createdAt\":\"Sat Oct 29 2022 21:06:32 GMT+0530 (India Standard Time)\",\"updatedAt\":\"Sun Nov 13 2022 23:32:59 GMT+0530 (India Standard Time)\",\"isAdmin\":0,\"isVerified\":1}}]', ''),
(100000000000131, '[{\"cif\":\"\",\"account\":\"\",\"accountType\":\"Saving\",\"title\":\"Mr\",\"customerName\":\"\",\"guardian\":\"\",\"pan\":\"\",\"mobile\":\"\",\"doi\":\"25/02/2023\",\"village\":\"\",\"distt\":\"\"},{\"branch\":{\"ID\":100000000000131,\"name\":\"Piyush Kumar\",\"email\":\"ilovepiyushji@gmail.com\",\"mobile\":9199530353,\"branchName\":\"BAIJNATHPUR\",\"branchAddress\":\"\",\"branchCode\":\"12645\",\"ifsc\":\"SBIN0012645\",\"city\":\"BAIJNATHPUR\",\"branchEmail\":\"sbi.12645@sbi.co.in\",\"branchPhone\":\"9771416355\",\"micr\":\"12645645\",\"createdAt\":\"Sat Oct 29 2022 21:06:32 GMT+0530 (India Standard Time)\",\"updatedAt\":\"Sun Nov 13 2022 23:32:59 GMT+0530 (India Standard Time)\",\"isAdmin\":0,\"isVerified\":1}}]', ''),
(100000000000131, '[{\"cif\":\"88443089550\",\"account\":\"34914645677\",\"accountType\":\"Saving\",\"title\":\"Mr\",\"customerName\":\"ABHISHEK KUMAR\",\"guardian\":\"ASHOK KUMAR SHARMA\",\"pan\":\"JCZPK2313K\",\"mobile\":\"8676006807\",\"doi\":\"03/03/2023\",\"village\":\"S/O ASHOK KUMAR SHARMA AT+PO SOUR BAZAR WARD NO 02\",\"distt\":\"SAHARSA\"},{\"branch\":{\"ID\":100000000000131,\"name\":\"Piyush Kumar\",\"email\":\"ilovepiyushji@gmail.com\",\"mobile\":9199530353,\"branchName\":\"BAIJNATHPUR\",\"branchAddress\":\"\",\"branchCode\":\"12645\",\"ifsc\":\"SBIN0012645\",\"city\":\"BAIJNATHPUR\",\"branchEmail\":\"sbi.12645@sbi.co.in\",\"branchPhone\":\"9771416355\",\"micr\":\"12645645\",\"createdAt\":\"Sat Oct 29 2022 21:06:32 GMT+0530 (India Standard Time)\",\"updatedAt\":\"Sun Nov 13 2022 23:32:59 GMT+0530 (India Standard Time)\",\"isAdmin\":0,\"isVerified\":1}}]', ''),
(100000000000131, '[{\"cif\":\"89565888\",\"account\":\"89565666\",\"accountType\":\"Saving\",\"title\":\"Mr\",\"customerName\":\"ABHISHEK KUMAR\",\"guardian\":\"ASHOK KUMAR SHARMA\",\"pan\":\"JCZPK2313K\",\"mobile\":\"8986454574\",\"doi\":\"03/03/2023\",\"address\":\"S/O ASHOK KUMAR SHARMA AT+PO SOUR BAZAR WARN 02\",\"distt\":\"SAHARSA\"},{\"branch\":{\"ID\":100000000000131,\"name\":\"Piyush Kumar\",\"email\":\"ilovepiyushji@gmail.com\",\"mobile\":9199530353,\"branchName\":\"BAIJNATHPUR\",\"branchAddress\":\"\",\"branchCode\":\"12645\",\"ifsc\":\"SBIN0012645\",\"city\":\"BAIJNATHPUR\",\"branchEmail\":\"sbi.12645@sbi.co.in\",\"branchPhone\":\"9771416355\",\"micr\":\"12645645\",\"createdAt\":\"Sat Oct 29 2022 21:06:32 GMT+0530 (India Standard Time)\",\"updatedAt\":\"Sun Nov 13 2022 23:32:59 GMT+0530 (India Standard Time)\",\"isAdmin\":0,\"isVerified\":1}}]', 'Fri Mar 03 2023 19:35:17 GMT+0530 (India Standard Time)');

-- --------------------------------------------------------

--
-- Table structure for table `token-history`
--

CREATE TABLE `token-history` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `transactionId` bigint(20) NOT NULL,
  `opening` smallint(6) NOT NULL,
  `purchased` smallint(6) NOT NULL,
  `date` varchar(9999) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `token-history`
--

INSERT INTO `token-history` (`id`, `email`, `transactionId`, `opening`, `purchased`, `date`) VALUES
(100000000000125, 'jotika3304@3mkz.com', 4343, 128, 50, 'Wed Nov 06 2022 23:06:09 GMT+0530 (India Standard Time)'),
(100000000000125, 'jotika3304@3mkz.com', 4354, 99, 344, 'Wed Nov 06 2022 23:56:09 GMT+0530 (India Standard Time)'),
(100000000000125, 'jotika3304@3mkz.com', 6566, 99, 29, 'Wed Nov 06 2022 22:56:09 GMT+0530 (India Standard Time)'),
(5555555343443, 'kdk@gmail.oc', 5555555555, 99, 344, ''),
(1667766523778, 'new.email16@mail.co.in', 1667766523778, 35, 12, 'Mon Nov 07 2022 01:58:43 GMT+0530 (India Standard Time)'),
(1667766548407, 'new.email76@mail.co.in', 1667766548407, 58, 48, 'Mon Nov 07 2022 01:59:08 GMT+0530 (India Standard Time)'),
(1667766548413, 'new.email39@mail.co.in', 1667766548413, 96, 17, 'Mon Nov 07 2022 01:59:08 GMT+0530 (India Standard Time)'),
(1667766548414, 'new.email88@mail.co.in', 1667766548414, 47, 45, 'Mon Nov 07 2022 01:59:08 GMT+0530 (India Standard Time)'),
(1667766728997, 'new.email49@mail.co.in', 1667766728997, 53, 45, 'Mon Nov 07 2022 02:02:08 GMT+0530 (India Standard Time)'),
(1667766729106, 'new.email45@mail.co.in', 1667766729106, 100, 82, 'Mon Nov 07 2022 02:02:09 GMT+0530 (India Standard Time)'),
(1667766729214, 'new.email54@mail.co.in', 1667766729214, 40, 80, 'Mon Nov 07 2022 02:02:09 GMT+0530 (India Standard Time)'),
(1667766729323, 'new.email21@mail.co.in', 1667766729323, 21, 6, 'Mon Nov 07 2022 02:02:09 GMT+0530 (India Standard Time)'),
(1667766729435, 'new.email10@mail.co.in', 1667766729435, 36, 28, 'Mon Nov 07 2022 02:02:09 GMT+0530 (India Standard Time)'),
(1667766729544, 'new.email99@mail.co.in', 1667766729544, 8, 27, 'Mon Nov 07 2022 02:02:09 GMT+0530 (India Standard Time)'),
(1667766729655, 'new.email73@mail.co.in', 1667766729655, 15, 94, 'Mon Nov 07 2022 02:02:09 GMT+0530 (India Standard Time)'),
(1667766729761, 'new.email42@mail.co.in', 1667766729761, 13, 21, 'Mon Nov 07 2022 02:02:09 GMT+0530 (India Standard Time)'),
(1667766729861, 'new.email27@mail.co.in', 1667766729861, 33, 46, 'Mon Nov 07 2022 02:02:09 GMT+0530 (India Standard Time)'),
(1667766729971, 'new.email56@mail.co.in', 1667766729971, 98, 82, 'Mon Nov 07 2022 02:02:09 GMT+0530 (India Standard Time)'),
(1667766730079, 'new.email50@mail.co.in', 1667766730079, 69, 51, 'Mon Nov 07 2022 02:02:10 GMT+0530 (India Standard Time)'),
(1667766730186, 'new.email50@mail.co.in', 1667766730186, 67, 90, 'Mon Nov 07 2022 02:02:10 GMT+0530 (India Standard Time)'),
(1667766730296, 'new.email86@mail.co.in', 1667766730296, 61, 93, 'Mon Nov 07 2022 02:02:10 GMT+0530 (India Standard Time)'),
(1667766730405, 'new.email3@mail.co.in', 1667766730405, 15, 55, 'Mon Nov 07 2022 02:02:10 GMT+0530 (India Standard Time)'),
(1667766730513, 'new.email46@mail.co.in', 1667766730513, 62, 99, 'Mon Nov 07 2022 02:02:10 GMT+0530 (India Standard Time)'),
(1667766730623, 'new.email38@mail.co.in', 1667766730623, 25, 56, 'Mon Nov 07 2022 02:02:10 GMT+0530 (India Standard Time)'),
(1667766730733, 'new.email43@mail.co.in', 1667766730733, 30, 81, 'Mon Nov 07 2022 02:02:10 GMT+0530 (India Standard Time)'),
(1667766730842, 'new.email68@mail.co.in', 1667766730842, 27, 86, 'Mon Nov 07 2022 02:02:10 GMT+0530 (India Standard Time)'),
(1667766730950, 'new.email67@mail.co.in', 1667766730950, 100, 46, 'Mon Nov 07 2022 02:02:10 GMT+0530 (India Standard Time)'),
(1667766731059, 'new.email61@mail.co.in', 1667766731059, 56, 76, 'Mon Nov 07 2022 02:02:11 GMT+0530 (India Standard Time)'),
(1667766731169, 'new.email11@mail.co.in', 1667766731169, 5, 22, 'Mon Nov 07 2022 02:02:11 GMT+0530 (India Standard Time)'),
(1667766731277, 'new.email55@mail.co.in', 1667766731277, 22, 90, 'Mon Nov 07 2022 02:02:11 GMT+0530 (India Standard Time)'),
(1667766731387, 'new.email94@mail.co.in', 1667766731387, 2, 32, 'Mon Nov 07 2022 02:02:11 GMT+0530 (India Standard Time)'),
(1667766731496, 'new.email77@mail.co.in', 1667766731496, 48, 16, 'Mon Nov 07 2022 02:02:11 GMT+0530 (India Standard Time)'),
(1667766731604, 'new.email36@mail.co.in', 1667766731604, 99, 87, 'Mon Nov 07 2022 02:02:11 GMT+0530 (India Standard Time)'),
(1667766731715, 'new.email37@mail.co.in', 1667766731715, 14, 81, 'Mon Nov 07 2022 02:02:11 GMT+0530 (India Standard Time)'),
(1667766731819, 'new.email27@mail.co.in', 1667766731819, 64, 72, 'Mon Nov 07 2022 02:02:11 GMT+0530 (India Standard Time)'),
(1667766731932, 'new.email83@mail.co.in', 1667766731932, 29, 72, 'Mon Nov 07 2022 02:02:11 GMT+0530 (India Standard Time)'),
(1667766732041, 'new.email46@mail.co.in', 1667766732041, 12, 93, 'Mon Nov 07 2022 02:02:12 GMT+0530 (India Standard Time)'),
(1667766732142, 'new.email36@mail.co.in', 1667766732143, 60, 34, 'Mon Nov 07 2022 02:02:12 GMT+0530 (India Standard Time)'),
(1667766732245, 'new.email96@mail.co.in', 1667766732246, 39, 41, 'Mon Nov 07 2022 02:02:12 GMT+0530 (India Standard Time)'),
(1667766732354, 'new.email43@mail.co.in', 1667766732354, 50, 29, 'Mon Nov 07 2022 02:02:12 GMT+0530 (India Standard Time)'),
(1667766732462, 'new.email22@mail.co.in', 1667766732462, 72, 65, 'Mon Nov 07 2022 02:02:12 GMT+0530 (India Standard Time)'),
(1667766732571, 'new.email41@mail.co.in', 1667766732571, 44, 36, 'Mon Nov 07 2022 02:02:12 GMT+0530 (India Standard Time)'),
(1667766732680, 'new.email76@mail.co.in', 1667766732680, 47, 52, 'Mon Nov 07 2022 02:02:12 GMT+0530 (India Standard Time)'),
(1667766732789, 'new.email70@mail.co.in', 1667766732789, 85, 44, 'Mon Nov 07 2022 02:02:12 GMT+0530 (India Standard Time)'),
(1667766732897, 'new.email62@mail.co.in', 1667766732897, 29, 71, 'Mon Nov 07 2022 02:02:12 GMT+0530 (India Standard Time)'),
(1667766733006, 'new.email43@mail.co.in', 1667766733006, 26, 38, 'Mon Nov 07 2022 02:02:13 GMT+0530 (India Standard Time)'),
(1667766733116, 'new.email4@mail.co.in', 1667766733116, 55, 86, 'Mon Nov 07 2022 02:02:13 GMT+0530 (India Standard Time)'),
(1667766733226, 'new.email31@mail.co.in', 1667766733226, 67, 67, 'Mon Nov 07 2022 02:02:13 GMT+0530 (India Standard Time)'),
(1667766733337, 'new.email70@mail.co.in', 1667766733337, 23, 19, 'Mon Nov 07 2022 02:02:13 GMT+0530 (India Standard Time)'),
(1667766733446, 'new.email33@mail.co.in', 1667766733446, 82, 39, 'Mon Nov 07 2022 02:02:13 GMT+0530 (India Standard Time)'),
(1667766733555, 'new.email77@mail.co.in', 1667766733555, 83, 72, 'Mon Nov 07 2022 02:02:13 GMT+0530 (India Standard Time)'),
(1667766733665, 'new.email34@mail.co.in', 1667766733665, 10, 21, 'Mon Nov 07 2022 02:02:13 GMT+0530 (India Standard Time)'),
(1667766733775, 'new.email90@mail.co.in', 1667766733775, 7, 44, 'Mon Nov 07 2022 02:02:13 GMT+0530 (India Standard Time)'),
(1667766733882, 'new.email32@mail.co.in', 1667766733882, 30, 96, 'Mon Nov 07 2022 02:02:13 GMT+0530 (India Standard Time)'),
(1667766733992, 'new.email63@mail.co.in', 1667766733992, 56, 3, 'Mon Nov 07 2022 02:02:13 GMT+0530 (India Standard Time)'),
(1667766734099, 'new.email16@mail.co.in', 1667766734099, 56, 98, 'Mon Nov 07 2022 02:02:14 GMT+0530 (India Standard Time)'),
(1667766734208, 'new.email95@mail.co.in', 1667766734208, 95, 19, 'Mon Nov 07 2022 02:02:14 GMT+0530 (India Standard Time)'),
(1667766734318, 'new.email30@mail.co.in', 1667766734318, 35, 30, 'Mon Nov 07 2022 02:02:14 GMT+0530 (India Standard Time)'),
(1667766734426, 'new.email38@mail.co.in', 1667766734426, 19, 31, 'Mon Nov 07 2022 02:02:14 GMT+0530 (India Standard Time)'),
(1667766734536, 'new.email100@mail.co.in', 1667766734536, 67, 83, 'Mon Nov 07 2022 02:02:14 GMT+0530 (India Standard Time)'),
(1667766734644, 'new.email24@mail.co.in', 1667766734644, 27, 94, 'Mon Nov 07 2022 02:02:14 GMT+0530 (India Standard Time)'),
(1667766734753, 'new.email67@mail.co.in', 1667766734753, 83, 22, 'Mon Nov 07 2022 02:02:14 GMT+0530 (India Standard Time)'),
(1667766734860, 'new.email20@mail.co.in', 1667766734860, 30, 71, 'Mon Nov 07 2022 02:02:14 GMT+0530 (India Standard Time)'),
(1667766734972, 'new.email12@mail.co.in', 1667766734972, 23, 44, 'Mon Nov 07 2022 02:02:14 GMT+0530 (India Standard Time)'),
(1667766735080, 'new.email65@mail.co.in', 1667766735080, 41, 28, 'Mon Nov 07 2022 02:02:15 GMT+0530 (India Standard Time)'),
(1667766735191, 'new.email70@mail.co.in', 1667766735191, 22, 11, 'Mon Nov 07 2022 02:02:15 GMT+0530 (India Standard Time)'),
(1667766735300, 'new.email34@mail.co.in', 1667766735300, 2, 87, 'Mon Nov 07 2022 02:02:15 GMT+0530 (India Standard Time)'),
(1667766735408, 'new.email88@mail.co.in', 1667766735408, 100, 75, 'Mon Nov 07 2022 02:02:15 GMT+0530 (India Standard Time)'),
(1667766735518, 'new.email9@mail.co.in', 1667766735518, 26, 33, 'Mon Nov 07 2022 02:02:15 GMT+0530 (India Standard Time)'),
(1667766735628, 'new.email35@mail.co.in', 1667766735628, 56, 81, 'Mon Nov 07 2022 02:02:15 GMT+0530 (India Standard Time)'),
(1667766735737, 'new.email17@mail.co.in', 1667766735737, 70, 82, 'Mon Nov 07 2022 02:02:15 GMT+0530 (India Standard Time)'),
(1667766735846, 'new.email37@mail.co.in', 1667766735846, 90, 49, 'Mon Nov 07 2022 02:02:15 GMT+0530 (India Standard Time)'),
(1667766735956, 'new.email61@mail.co.in', 1667766735956, 36, 25, 'Mon Nov 07 2022 02:02:15 GMT+0530 (India Standard Time)'),
(1667766736064, 'new.email71@mail.co.in', 1667766736064, 45, 73, 'Mon Nov 07 2022 02:02:16 GMT+0530 (India Standard Time)'),
(1667766736174, 'new.email40@mail.co.in', 1667766736174, 50, 32, 'Mon Nov 07 2022 02:02:16 GMT+0530 (India Standard Time)'),
(1667766736284, 'new.email74@mail.co.in', 1667766736284, 39, 2, 'Mon Nov 07 2022 02:02:16 GMT+0530 (India Standard Time)'),
(1667766736394, 'new.email54@mail.co.in', 1667766736394, 5, 80, 'Mon Nov 07 2022 02:02:16 GMT+0530 (India Standard Time)'),
(1667766736503, 'new.email100@mail.co.in', 1667766736503, 93, 91, 'Mon Nov 07 2022 02:02:16 GMT+0530 (India Standard Time)'),
(1667766736613, 'new.email8@mail.co.in', 1667766736613, 34, 54, 'Mon Nov 07 2022 02:02:16 GMT+0530 (India Standard Time)'),
(1667766736722, 'new.email4@mail.co.in', 1667766736722, 73, 67, 'Mon Nov 07 2022 02:02:16 GMT+0530 (India Standard Time)'),
(1667766736829, 'new.email57@mail.co.in', 1667766736829, 66, 48, 'Mon Nov 07 2022 02:02:16 GMT+0530 (India Standard Time)'),
(1667766736937, 'new.email26@mail.co.in', 1667766736937, 64, 89, 'Mon Nov 07 2022 02:02:16 GMT+0530 (India Standard Time)'),
(1667766737045, 'new.email18@mail.co.in', 1667766737045, 74, 46, 'Mon Nov 07 2022 02:02:17 GMT+0530 (India Standard Time)'),
(1667766737153, 'new.email8@mail.co.in', 1667766737153, 40, 47, 'Mon Nov 07 2022 02:02:17 GMT+0530 (India Standard Time)'),
(1667766737262, 'new.email94@mail.co.in', 1667766737262, 32, 23, 'Mon Nov 07 2022 02:02:17 GMT+0530 (India Standard Time)'),
(1667766737374, 'new.email14@mail.co.in', 1667766737374, 25, 69, 'Mon Nov 07 2022 02:02:17 GMT+0530 (India Standard Time)'),
(1667766737483, 'new.email37@mail.co.in', 1667766737483, 33, 6, 'Mon Nov 07 2022 02:02:17 GMT+0530 (India Standard Time)'),
(1667766737591, 'new.email77@mail.co.in', 1667766737591, 78, 29, 'Mon Nov 07 2022 02:02:17 GMT+0530 (India Standard Time)'),
(1667766737700, 'new.email56@mail.co.in', 1667766737700, 36, 80, 'Mon Nov 07 2022 02:02:17 GMT+0530 (India Standard Time)'),
(1667766737810, 'new.email23@mail.co.in', 1667766737810, 3, 38, 'Mon Nov 07 2022 02:02:17 GMT+0530 (India Standard Time)'),
(1667766737918, 'new.email74@mail.co.in', 1667766737918, 31, 72, 'Mon Nov 07 2022 02:02:17 GMT+0530 (India Standard Time)'),
(1667766738027, 'new.email80@mail.co.in', 1667766738027, 55, 69, 'Mon Nov 07 2022 02:02:18 GMT+0530 (India Standard Time)'),
(1667766738136, 'new.email19@mail.co.in', 1667766738136, 14, 67, 'Mon Nov 07 2022 02:02:18 GMT+0530 (India Standard Time)'),
(1667766738246, 'new.email54@mail.co.in', 1667766738246, 75, 8, 'Mon Nov 07 2022 02:02:18 GMT+0530 (India Standard Time)'),
(1667766738357, 'new.email57@mail.co.in', 1667766738357, 43, 59, 'Mon Nov 07 2022 02:02:18 GMT+0530 (India Standard Time)'),
(1667766738467, 'new.email43@mail.co.in', 1667766738467, 95, 37, 'Mon Nov 07 2022 02:02:18 GMT+0530 (India Standard Time)'),
(1667766738575, 'new.email58@mail.co.in', 1667766738575, 79, 24, 'Mon Nov 07 2022 02:02:18 GMT+0530 (India Standard Time)'),
(1667766738686, 'new.email100@mail.co.in', 1667766738686, 97, 4, 'Mon Nov 07 2022 02:02:18 GMT+0530 (India Standard Time)'),
(1667766738790, 'new.email7@mail.co.in', 1667766738790, 94, 98, 'Mon Nov 07 2022 02:02:18 GMT+0530 (India Standard Time)'),
(1667766738905, 'new.email86@mail.co.in', 1667766738905, 85, 38, 'Mon Nov 07 2022 02:02:18 GMT+0530 (India Standard Time)'),
(1667766739014, 'new.email49@mail.co.in', 1667766739014, 87, 100, 'Mon Nov 07 2022 02:02:19 GMT+0530 (India Standard Time)'),
(1667766739125, 'new.email46@mail.co.in', 1667766739125, 58, 55, 'Mon Nov 07 2022 02:02:19 GMT+0530 (India Standard Time)'),
(1667766739234, 'new.email62@mail.co.in', 1667766739234, 3, 96, 'Mon Nov 07 2022 02:02:19 GMT+0530 (India Standard Time)'),
(1667766739344, 'new.email36@mail.co.in', 1667766739344, 82, 89, 'Mon Nov 07 2022 02:02:19 GMT+0530 (India Standard Time)'),
(1667766739454, 'new.email49@mail.co.in', 1667766739454, 81, 76, 'Mon Nov 07 2022 02:02:19 GMT+0530 (India Standard Time)'),
(1667766739565, 'new.email94@mail.co.in', 1667766739565, 66, 5, 'Mon Nov 07 2022 02:02:19 GMT+0530 (India Standard Time)'),
(1667766739675, 'new.email24@mail.co.in', 1667766739675, 66, 55, 'Mon Nov 07 2022 02:02:19 GMT+0530 (India Standard Time)'),
(1667766739787, 'new.email88@mail.co.in', 1667766739787, 27, 6, 'Mon Nov 07 2022 02:02:19 GMT+0530 (India Standard Time)'),
(1667766739898, 'new.email93@mail.co.in', 1667766739898, 88, 17, 'Mon Nov 07 2022 02:02:19 GMT+0530 (India Standard Time)'),
(1667766740007, 'new.email73@mail.co.in', 1667766740007, 98, 43, 'Mon Nov 07 2022 02:02:20 GMT+0530 (India Standard Time)'),
(1667766740117, 'new.email85@mail.co.in', 1667766740117, 51, 28, 'Mon Nov 07 2022 02:02:20 GMT+0530 (India Standard Time)'),
(1667766740227, 'new.email100@mail.co.in', 1667766740227, 21, 99, 'Mon Nov 07 2022 02:02:20 GMT+0530 (India Standard Time)'),
(1667766740337, 'new.email80@mail.co.in', 1667766740337, 59, 55, 'Mon Nov 07 2022 02:02:20 GMT+0530 (India Standard Time)'),
(1667766740446, 'new.email85@mail.co.in', 1667766740446, 78, 21, 'Mon Nov 07 2022 02:02:20 GMT+0530 (India Standard Time)'),
(1667766740555, 'new.email37@mail.co.in', 1667766740555, 51, 68, 'Mon Nov 07 2022 02:02:20 GMT+0530 (India Standard Time)'),
(1667766740664, 'new.email71@mail.co.in', 1667766740664, 75, 76, 'Mon Nov 07 2022 02:02:20 GMT+0530 (India Standard Time)'),
(1667766740772, 'new.email31@mail.co.in', 1667766740772, 41, 58, 'Mon Nov 07 2022 02:02:20 GMT+0530 (India Standard Time)'),
(1667766740881, 'new.email21@mail.co.in', 1667766740881, 45, 77, 'Mon Nov 07 2022 02:02:20 GMT+0530 (India Standard Time)'),
(1667766740988, 'new.email2@mail.co.in', 1667766740988, 91, 93, 'Mon Nov 07 2022 02:02:20 GMT+0530 (India Standard Time)'),
(1667766741096, 'new.email95@mail.co.in', 1667766741096, 93, 17, 'Mon Nov 07 2022 02:02:21 GMT+0530 (India Standard Time)'),
(1667766741205, 'new.email58@mail.co.in', 1667766741205, 68, 61, 'Mon Nov 07 2022 02:02:21 GMT+0530 (India Standard Time)'),
(1667766741313, 'new.email24@mail.co.in', 1667766741313, 71, 97, 'Mon Nov 07 2022 02:02:21 GMT+0530 (India Standard Time)'),
(1667766741422, 'new.email42@mail.co.in', 1667766741422, 12, 72, 'Mon Nov 07 2022 02:02:21 GMT+0530 (India Standard Time)'),
(1667766741531, 'new.email64@mail.co.in', 1667766741531, 99, 42, 'Mon Nov 07 2022 02:02:21 GMT+0530 (India Standard Time)'),
(1667766741641, 'new.email19@mail.co.in', 1667766741641, 78, 32, 'Mon Nov 07 2022 02:02:21 GMT+0530 (India Standard Time)'),
(1667766741752, 'new.email62@mail.co.in', 1667766741752, 1, 80, 'Mon Nov 07 2022 02:02:21 GMT+0530 (India Standard Time)'),
(1667766741862, 'new.email78@mail.co.in', 1667766741862, 30, 38, 'Mon Nov 07 2022 02:02:21 GMT+0530 (India Standard Time)'),
(1667766741971, 'new.email7@mail.co.in', 1667766741971, 38, 68, 'Mon Nov 07 2022 02:02:21 GMT+0530 (India Standard Time)'),
(1667766742081, 'new.email78@mail.co.in', 1667766742081, 98, 26, 'Mon Nov 07 2022 02:02:22 GMT+0530 (India Standard Time)'),
(1667766742191, 'new.email61@mail.co.in', 1667766742191, 66, 21, 'Mon Nov 07 2022 02:02:22 GMT+0530 (India Standard Time)'),
(1667766742300, 'new.email50@mail.co.in', 1667766742300, 82, 72, 'Mon Nov 07 2022 02:02:22 GMT+0530 (India Standard Time)'),
(1667766742410, 'new.email73@mail.co.in', 1667766742410, 87, 27, 'Mon Nov 07 2022 02:02:22 GMT+0530 (India Standard Time)'),
(1667766742519, 'new.email99@mail.co.in', 1667766742519, 15, 25, 'Mon Nov 07 2022 02:02:22 GMT+0530 (India Standard Time)'),
(1667766742629, 'new.email31@mail.co.in', 1667766742629, 100, 55, 'Mon Nov 07 2022 02:02:22 GMT+0530 (India Standard Time)'),
(1667766742739, 'new.email9@mail.co.in', 1667766742739, 60, 16, 'Mon Nov 07 2022 02:02:22 GMT+0530 (India Standard Time)'),
(1667766742848, 'new.email80@mail.co.in', 1667766742848, 11, 15, 'Mon Nov 07 2022 02:02:22 GMT+0530 (India Standard Time)'),
(1667766742958, 'new.email88@mail.co.in', 1667766742958, 60, 13, 'Mon Nov 07 2022 02:02:22 GMT+0530 (India Standard Time)'),
(1667766743067, 'new.email3@mail.co.in', 1667766743067, 54, 20, 'Mon Nov 07 2022 02:02:23 GMT+0530 (India Standard Time)'),
(1667766743177, 'new.email86@mail.co.in', 1667766743177, 68, 15, 'Mon Nov 07 2022 02:02:23 GMT+0530 (India Standard Time)'),
(1667766743286, 'new.email19@mail.co.in', 1667766743286, 52, 59, 'Mon Nov 07 2022 02:02:23 GMT+0530 (India Standard Time)'),
(1667766743396, 'new.email10@mail.co.in', 1667766743396, 29, 38, 'Mon Nov 07 2022 02:02:23 GMT+0530 (India Standard Time)'),
(1667766743506, 'new.email68@mail.co.in', 1667766743506, 43, 38, 'Mon Nov 07 2022 02:02:23 GMT+0530 (India Standard Time)'),
(1667766743615, 'new.email15@mail.co.in', 1667766743615, 14, 81, 'Mon Nov 07 2022 02:02:23 GMT+0530 (India Standard Time)'),
(1667766743725, 'new.email61@mail.co.in', 1667766743725, 51, 1, 'Mon Nov 07 2022 02:02:23 GMT+0530 (India Standard Time)'),
(1667766743835, 'new.email26@mail.co.in', 1667766743835, 55, 74, 'Mon Nov 07 2022 02:02:23 GMT+0530 (India Standard Time)'),
(1667766743942, 'new.email36@mail.co.in', 1667766743942, 16, 34, 'Mon Nov 07 2022 02:02:23 GMT+0530 (India Standard Time)'),
(1667766744051, 'new.email72@mail.co.in', 1667766744051, 38, 84, 'Mon Nov 07 2022 02:02:24 GMT+0530 (India Standard Time)'),
(1667766744160, 'new.email33@mail.co.in', 1667766744160, 91, 52, 'Mon Nov 07 2022 02:02:24 GMT+0530 (India Standard Time)'),
(1667766744269, 'new.email98@mail.co.in', 1667766744269, 98, 72, 'Mon Nov 07 2022 02:02:24 GMT+0530 (India Standard Time)'),
(1667766744378, 'new.email100@mail.co.in', 1667766744378, 35, 33, 'Mon Nov 07 2022 02:02:24 GMT+0530 (India Standard Time)'),
(1667766744487, 'new.email15@mail.co.in', 1667766744487, 76, 37, 'Mon Nov 07 2022 02:02:24 GMT+0530 (India Standard Time)'),
(1667766744596, 'new.email64@mail.co.in', 1667766744596, 83, 73, 'Mon Nov 07 2022 02:02:24 GMT+0530 (India Standard Time)'),
(1667766744706, 'new.email15@mail.co.in', 1667766744706, 95, 95, 'Mon Nov 07 2022 02:02:24 GMT+0530 (India Standard Time)'),
(1667766744816, 'new.email8@mail.co.in', 1667766744816, 34, 51, 'Mon Nov 07 2022 02:02:24 GMT+0530 (India Standard Time)'),
(1667766744928, 'new.email20@mail.co.in', 1667766744928, 48, 32, 'Mon Nov 07 2022 02:02:24 GMT+0530 (India Standard Time)'),
(1667766745040, 'new.email2@mail.co.in', 1667766745040, 73, 42, 'Mon Nov 07 2022 02:02:25 GMT+0530 (India Standard Time)'),
(1667766745144, 'new.email43@mail.co.in', 1667766745144, 35, 32, 'Mon Nov 07 2022 02:02:25 GMT+0530 (India Standard Time)'),
(1667766745245, 'new.email6@mail.co.in', 1667766745245, 86, 93, 'Mon Nov 07 2022 02:02:25 GMT+0530 (India Standard Time)'),
(1667766745353, 'new.email34@mail.co.in', 1667766745353, 69, 3, 'Mon Nov 07 2022 02:02:25 GMT+0530 (India Standard Time)'),
(1667766745461, 'new.email64@mail.co.in', 1667766745461, 17, 15, 'Mon Nov 07 2022 02:02:25 GMT+0530 (India Standard Time)'),
(1667766745570, 'new.email19@mail.co.in', 1667766745570, 40, 34, 'Mon Nov 07 2022 02:02:25 GMT+0530 (India Standard Time)'),
(1667766745678, 'new.email10@mail.co.in', 1667766745678, 54, 63, 'Mon Nov 07 2022 02:02:25 GMT+0530 (India Standard Time)'),
(1667766745782, 'new.email44@mail.co.in', 1667766745782, 75, 94, 'Mon Nov 07 2022 02:02:25 GMT+0530 (India Standard Time)'),
(1667766745897, 'new.email93@mail.co.in', 1667766745897, 99, 16, 'Mon Nov 07 2022 02:02:25 GMT+0530 (India Standard Time)'),
(1667766746007, 'new.email87@mail.co.in', 1667766746007, 35, 76, 'Mon Nov 07 2022 02:02:26 GMT+0530 (India Standard Time)'),
(1667766746115, 'new.email5@mail.co.in', 1667766746115, 81, 38, 'Mon Nov 07 2022 02:02:26 GMT+0530 (India Standard Time)'),
(1667766746225, 'new.email53@mail.co.in', 1667766746225, 94, 57, 'Mon Nov 07 2022 02:02:26 GMT+0530 (India Standard Time)'),
(1667766746335, 'new.email89@mail.co.in', 1667766746335, 31, 59, 'Mon Nov 07 2022 02:02:26 GMT+0530 (India Standard Time)'),
(1667766746444, 'new.email82@mail.co.in', 1667766746445, 78, 51, 'Mon Nov 07 2022 02:02:26 GMT+0530 (India Standard Time)'),
(1667766746554, 'new.email18@mail.co.in', 1667766746554, 30, 4, 'Mon Nov 07 2022 02:02:26 GMT+0530 (India Standard Time)'),
(1667766746663, 'new.email38@mail.co.in', 1667766746663, 38, 8, 'Mon Nov 07 2022 02:02:26 GMT+0530 (India Standard Time)'),
(1667766746771, 'new.email49@mail.co.in', 1667766746771, 96, 58, 'Mon Nov 07 2022 02:02:26 GMT+0530 (India Standard Time)'),
(1667766746880, 'new.email6@mail.co.in', 1667766746880, 12, 5, 'Mon Nov 07 2022 02:02:26 GMT+0530 (India Standard Time)'),
(1667766746988, 'new.email98@mail.co.in', 1667766746988, 26, 52, 'Mon Nov 07 2022 02:02:26 GMT+0530 (India Standard Time)'),
(1667766747097, 'new.email61@mail.co.in', 1667766747097, 89, 46, 'Mon Nov 07 2022 02:02:27 GMT+0530 (India Standard Time)'),
(1667766747207, 'new.email90@mail.co.in', 1667766747207, 20, 56, 'Mon Nov 07 2022 02:02:27 GMT+0530 (India Standard Time)'),
(1667766747317, 'new.email12@mail.co.in', 1667766747317, 60, 26, 'Mon Nov 07 2022 02:02:27 GMT+0530 (India Standard Time)'),
(1667766747427, 'new.email31@mail.co.in', 1667766747427, 34, 82, 'Mon Nov 07 2022 02:02:27 GMT+0530 (India Standard Time)'),
(1667766747536, 'new.email67@mail.co.in', 1667766747536, 73, 51, 'Mon Nov 07 2022 02:02:27 GMT+0530 (India Standard Time)'),
(1667766747645, 'new.email78@mail.co.in', 1667766747645, 65, 27, 'Mon Nov 07 2022 02:02:27 GMT+0530 (India Standard Time)'),
(1667766747754, 'new.email24@mail.co.in', 1667766747754, 13, 88, 'Mon Nov 07 2022 02:02:27 GMT+0530 (India Standard Time)'),
(1667766747863, 'new.email53@mail.co.in', 1667766747863, 6, 28, 'Mon Nov 07 2022 02:02:27 GMT+0530 (India Standard Time)'),
(1667766747972, 'new.email55@mail.co.in', 1667766747972, 45, 80, 'Mon Nov 07 2022 02:02:27 GMT+0530 (India Standard Time)'),
(1667766748082, 'new.email54@mail.co.in', 1667766748082, 99, 41, 'Mon Nov 07 2022 02:02:28 GMT+0530 (India Standard Time)'),
(1667766748190, 'new.email67@mail.co.in', 1667766748190, 89, 70, 'Mon Nov 07 2022 02:02:28 GMT+0530 (India Standard Time)'),
(1667766748300, 'new.email50@mail.co.in', 1667766748300, 67, 39, 'Mon Nov 07 2022 02:02:28 GMT+0530 (India Standard Time)'),
(1667766748410, 'new.email87@mail.co.in', 1667766748410, 3, 13, 'Mon Nov 07 2022 02:02:28 GMT+0530 (India Standard Time)'),
(1667766748522, 'new.email58@mail.co.in', 1667766748522, 81, 55, 'Mon Nov 07 2022 02:02:28 GMT+0530 (India Standard Time)'),
(1667766748638, 'new.email22@mail.co.in', 1667766748638, 30, 70, 'Mon Nov 07 2022 02:02:28 GMT+0530 (India Standard Time)'),
(1667766748739, 'new.email38@mail.co.in', 1667766748740, 16, 44, 'Mon Nov 07 2022 02:02:28 GMT+0530 (India Standard Time)'),
(1667766748850, 'new.email82@mail.co.in', 1667766748850, 11, 77, 'Mon Nov 07 2022 02:02:28 GMT+0530 (India Standard Time)'),
(1667766748961, 'new.email80@mail.co.in', 1667766748961, 80, 80, 'Mon Nov 07 2022 02:02:28 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email96@mail.co.in', 1667766873732, 29, 95, 'Mon Nov 07 2022 02:04:33 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email28@mail.co.in', 1667766873839, 61, 90, 'Mon Nov 07 2022 02:04:33 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email77@mail.co.in', 1667766873950, 81, 65, 'Mon Nov 07 2022 02:04:33 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email8@mail.co.in', 1667766874061, 48, 40, 'Mon Nov 07 2022 02:04:34 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email45@mail.co.in', 1667766874171, 45, 76, 'Mon Nov 07 2022 02:04:34 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email48@mail.co.in', 1667766874281, 93, 40, 'Mon Nov 07 2022 02:04:34 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email99@mail.co.in', 1667766874393, 53, 21, 'Mon Nov 07 2022 02:04:34 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email78@mail.co.in', 1667766874504, 87, 71, 'Mon Nov 07 2022 02:04:34 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email87@mail.co.in', 1667766874615, 15, 69, 'Mon Nov 07 2022 02:04:34 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email89@mail.co.in', 1667766874727, 19, 27, 'Mon Nov 07 2022 02:04:34 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email1@mail.co.in', 1667766874837, 81, 11, 'Mon Nov 07 2022 02:04:34 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email96@mail.co.in', 1667766874948, 11, 81, 'Mon Nov 07 2022 02:04:34 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email77@mail.co.in', 1667766875058, 35, 84, 'Mon Nov 07 2022 02:04:35 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email40@mail.co.in', 1667766875169, 24, 65, 'Mon Nov 07 2022 02:04:35 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email29@mail.co.in', 1667766875281, 85, 77, 'Mon Nov 07 2022 02:04:35 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email81@mail.co.in', 1667766875390, 98, 29, 'Mon Nov 07 2022 02:04:35 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email6@mail.co.in', 1667766875501, 66, 98, 'Mon Nov 07 2022 02:04:35 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email47@mail.co.in', 1667766875613, 29, 45, 'Mon Nov 07 2022 02:04:35 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email65@mail.co.in', 1667766875725, 17, 92, 'Mon Nov 07 2022 02:04:35 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email1@mail.co.in', 1667766875836, 41, 44, 'Mon Nov 07 2022 02:04:35 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email56@mail.co.in', 1667766875946, 33, 29, 'Mon Nov 07 2022 02:04:35 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email8@mail.co.in', 1667766876059, 100, 55, 'Mon Nov 07 2022 02:04:36 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email95@mail.co.in', 1667766876168, 41, 47, 'Mon Nov 07 2022 02:04:36 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email32@mail.co.in', 1667766876279, 94, 100, 'Mon Nov 07 2022 02:04:36 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email19@mail.co.in', 1667766876390, 100, 61, 'Mon Nov 07 2022 02:04:36 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email17@mail.co.in', 1667766876500, 19, 97, 'Mon Nov 07 2022 02:04:36 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email86@mail.co.in', 1667766876610, 82, 99, 'Mon Nov 07 2022 02:04:36 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email80@mail.co.in', 1667766876721, 95, 56, 'Mon Nov 07 2022 02:04:36 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email54@mail.co.in', 1667766876832, 65, 27, 'Mon Nov 07 2022 02:04:36 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email71@mail.co.in', 1667766876942, 60, 58, 'Mon Nov 07 2022 02:04:36 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email96@mail.co.in', 1667766877051, 65, 32, 'Mon Nov 07 2022 02:04:37 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email78@mail.co.in', 1667766877160, 97, 64, 'Mon Nov 07 2022 02:04:37 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email54@mail.co.in', 1667766877268, 35, 76, 'Mon Nov 07 2022 02:04:37 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email89@mail.co.in', 1667766877377, 99, 78, 'Mon Nov 07 2022 02:04:37 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email24@mail.co.in', 1667766877487, 47, 18, 'Mon Nov 07 2022 02:04:37 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email43@mail.co.in', 1667766877595, 61, 55, 'Mon Nov 07 2022 02:04:37 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email14@mail.co.in', 1667766877705, 33, 36, 'Mon Nov 07 2022 02:04:37 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email48@mail.co.in', 1667766877813, 84, 26, 'Mon Nov 07 2022 02:04:37 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email27@mail.co.in', 1667766877921, 18, 4, 'Mon Nov 07 2022 02:04:37 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email59@mail.co.in', 1667766878029, 58, 28, 'Mon Nov 07 2022 02:04:38 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email6@mail.co.in', 1667766878137, 90, 26, 'Mon Nov 07 2022 02:04:38 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email90@mail.co.in', 1667766878246, 27, 47, 'Mon Nov 07 2022 02:04:38 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email14@mail.co.in', 1667766878355, 89, 12, 'Mon Nov 07 2022 02:04:38 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email40@mail.co.in', 1667766878464, 31, 53, 'Mon Nov 07 2022 02:04:38 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email14@mail.co.in', 1667766878573, 81, 35, 'Mon Nov 07 2022 02:04:38 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email56@mail.co.in', 1667766878682, 10, 34, 'Mon Nov 07 2022 02:04:38 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email28@mail.co.in', 1667766878792, 71, 59, 'Mon Nov 07 2022 02:04:38 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email81@mail.co.in', 1667766878901, 44, 38, 'Mon Nov 07 2022 02:04:38 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email27@mail.co.in', 1667766879011, 85, 41, 'Mon Nov 07 2022 02:04:39 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email75@mail.co.in', 1667766879119, 23, 40, 'Mon Nov 07 2022 02:04:39 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email32@mail.co.in', 1667766879228, 46, 62, 'Mon Nov 07 2022 02:04:39 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email47@mail.co.in', 1667766879335, 58, 25, 'Mon Nov 07 2022 02:04:39 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email75@mail.co.in', 1667766879445, 20, 83, 'Mon Nov 07 2022 02:04:39 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email25@mail.co.in', 1667766879555, 60, 18, 'Mon Nov 07 2022 02:04:39 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email42@mail.co.in', 1667766879665, 27, 39, 'Mon Nov 07 2022 02:04:39 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email20@mail.co.in', 1667766879777, 91, 21, 'Mon Nov 07 2022 02:04:39 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email78@mail.co.in', 1667766879885, 17, 10, 'Mon Nov 07 2022 02:04:39 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email46@mail.co.in', 1667766879996, 50, 47, 'Mon Nov 07 2022 02:04:39 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email78@mail.co.in', 1667766880105, 9, 73, 'Mon Nov 07 2022 02:04:40 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email87@mail.co.in', 1667766880213, 69, 10, 'Mon Nov 07 2022 02:04:40 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email93@mail.co.in', 1667766880322, 55, 8, 'Mon Nov 07 2022 02:04:40 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email25@mail.co.in', 1667766880431, 83, 42, 'Mon Nov 07 2022 02:04:40 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email87@mail.co.in', 1667766880541, 94, 3, 'Mon Nov 07 2022 02:04:40 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email13@mail.co.in', 1667766880650, 24, 40, 'Mon Nov 07 2022 02:04:40 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email26@mail.co.in', 1667766880759, 28, 95, 'Mon Nov 07 2022 02:04:40 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email31@mail.co.in', 1667766880868, 87, 31, 'Mon Nov 07 2022 02:04:40 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email8@mail.co.in', 1667766880976, 91, 49, 'Mon Nov 07 2022 02:04:40 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email69@mail.co.in', 1667766881086, 11, 25, 'Mon Nov 07 2022 02:04:41 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email48@mail.co.in', 1667766881196, 77, 48, 'Mon Nov 07 2022 02:04:41 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email99@mail.co.in', 1667766881304, 10, 54, 'Mon Nov 07 2022 02:04:41 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email7@mail.co.in', 1667766881413, 34, 73, 'Mon Nov 07 2022 02:04:41 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email6@mail.co.in', 1667766881523, 63, 29, 'Mon Nov 07 2022 02:04:41 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email1@mail.co.in', 1667766881632, 25, 68, 'Mon Nov 07 2022 02:04:41 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email94@mail.co.in', 1667766881742, 89, 38, 'Mon Nov 07 2022 02:04:41 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email1@mail.co.in', 1667766881852, 74, 47, 'Mon Nov 07 2022 02:04:41 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email16@mail.co.in', 1667766881963, 50, 59, 'Mon Nov 07 2022 02:04:41 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email4@mail.co.in', 1667766882071, 68, 37, 'Mon Nov 07 2022 02:04:42 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email52@mail.co.in', 1667766882181, 100, 96, 'Mon Nov 07 2022 02:04:42 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email69@mail.co.in', 1667766882291, 3, 28, 'Mon Nov 07 2022 02:04:42 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email96@mail.co.in', 1667766882400, 12, 65, 'Mon Nov 07 2022 02:04:42 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email10@mail.co.in', 1667766882510, 2, 47, 'Mon Nov 07 2022 02:04:42 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email60@mail.co.in', 1667766882619, 35, 56, 'Mon Nov 07 2022 02:04:42 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email74@mail.co.in', 1667766882729, 88, 33, 'Mon Nov 07 2022 02:04:42 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email37@mail.co.in', 1667766882838, 86, 86, 'Mon Nov 07 2022 02:04:42 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email63@mail.co.in', 1667766882947, 6, 77, 'Mon Nov 07 2022 02:04:42 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email54@mail.co.in', 1667766883056, 42, 64, 'Mon Nov 07 2022 02:04:43 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email35@mail.co.in', 1667766883164, 90, 41, 'Mon Nov 07 2022 02:04:43 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email34@mail.co.in', 1667766883272, 59, 94, 'Mon Nov 07 2022 02:04:43 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email96@mail.co.in', 1667766883383, 36, 32, 'Mon Nov 07 2022 02:04:43 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email48@mail.co.in', 1667766883493, 7, 40, 'Mon Nov 07 2022 02:04:43 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email66@mail.co.in', 1667766883602, 67, 2, 'Mon Nov 07 2022 02:04:43 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email92@mail.co.in', 1667766883711, 37, 51, 'Mon Nov 07 2022 02:04:43 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email40@mail.co.in', 1667766883821, 66, 54, 'Mon Nov 07 2022 02:04:43 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email65@mail.co.in', 1667766883931, 37, 94, 'Mon Nov 07 2022 02:04:43 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email53@mail.co.in', 1667766884041, 41, 94, 'Mon Nov 07 2022 02:04:44 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email5@mail.co.in', 1667766884148, 94, 24, 'Mon Nov 07 2022 02:04:44 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email38@mail.co.in', 1667766884257, 23, 83, 'Mon Nov 07 2022 02:04:44 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email51@mail.co.in', 1667766884365, 22, 31, 'Mon Nov 07 2022 02:04:44 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email99@mail.co.in', 1667766884474, 45, 70, 'Mon Nov 07 2022 02:04:44 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email4@mail.co.in', 1667766884585, 51, 96, 'Mon Nov 07 2022 02:04:44 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email89@mail.co.in', 1667766884694, 56, 28, 'Mon Nov 07 2022 02:04:44 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email84@mail.co.in', 1667766884804, 29, 49, 'Mon Nov 07 2022 02:04:44 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email31@mail.co.in', 1667766884911, 68, 76, 'Mon Nov 07 2022 02:04:44 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email29@mail.co.in', 1667766885020, 13, 96, 'Mon Nov 07 2022 02:04:45 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email59@mail.co.in', 1667766885130, 94, 15, 'Mon Nov 07 2022 02:04:45 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email77@mail.co.in', 1667766885240, 99, 1, 'Mon Nov 07 2022 02:04:45 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email90@mail.co.in', 1667766885349, 47, 16, 'Mon Nov 07 2022 02:04:45 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email52@mail.co.in', 1667766885459, 58, 63, 'Mon Nov 07 2022 02:04:45 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email94@mail.co.in', 1667766885570, 68, 12, 'Mon Nov 07 2022 02:04:45 GMT+0530 (India Standard Time)'),
(100000000000125, 'new.email13@mail.co.in', 1667766885681, 3, 28, 'Mon Nov 07 2022 02:04:45 GMT+0530 (India Standard Time)'),
(1667766583201, 'new.email47@mail.co.in', 5003299749603, 53, 84, 'Mon Nov 07 2022 01:59:43 GMT+0530 (India Standard Time)'),
(1667766583206, 'new.email50@mail.co.in', 5003299749618, 2, 64, 'Mon Nov 07 2022 01:59:43 GMT+0530 (India Standard Time)'),
(1667766583207, 'new.email46@mail.co.in', 5003299749621, 41, 89, 'Mon Nov 07 2022 01:59:43 GMT+0530 (India Standard Time)'),
(555555533443, 'kdk@gmail.oc', 5003299749622, 99, 344, ''),
(6554, 'kdk@gmail.oc', 5003299749623, 65, 8, '22:45:20'),
(100000000000128, 'jotikadff04@3mkz.com', 5003299749624, 10, 10, 'Thu Nov 10 2022 23:39:29 GMT+0530 (India Standard Time)'),
(100000000000128, 'jotikadff04@3mkz.com', 5003299749625, 20, 2, 'Thu Nov 10 2022 23:40:22 GMT+0530 (India Standard Time)'),
(100000000000128, 'jotikadff04@3mkz.com', 5003299749626, 22, 3, 'Thu Nov 10 2022 23:42:07 GMT+0530 (India Standard Time)'),
(100000000000131, 'ilovepiyushji@gmail.com', 5003299749627, 180, 1800, 'Fri Nov 11 2022 00:45:32 GMT+0530 (India Standard Time)'),
(100000000000131, 'ilovepiyushji@gmail.com', 5003299749628, -17020, 17022, 'Fri Nov 11 2022 00:46:59 GMT+0530 (India Standard Time)'),
(100000000000122, 'kahof14166@24rumen.com', 5003299749629, 0, 4999, 'Fri Nov 11 2022 20:10:43 GMT+0530 (India Standard Time)'),
(100000000000200, 'ksdkdls@kkke', 5003299749630, 0, 32323, 'Sat Nov 12 2022 20:13:42 GMT+0530 (India Standard Time)'),
(100000000000200, 'ksdkdls@kkke', 5003299749631, 0, 123, 'Sat Nov 12 2022 21:48:51 GMT+0530 (India Standard Time)'),
(100000000000131, 'ilovepiyushji@gmail.com', 5003299749632, 2, 5656, 'Sun Nov 13 2022 18:02:24 GMT+0530 (India Standard Time)'),
(100000000000200, 'ksdkdls@kkke', 5003299749633, 123, 32767, 'Sun Nov 13 2022 19:08:09 GMT+0530 (India Standard Time)'),
(100000000000125, 'jotika3304@3mkz.com', 5003299749634, 0, 1, 'Sun Nov 13 2022 20:02:47 GMT+0530 (India Standard Time)'),
(100000000000200, 'ksdkdls@kkke', 5003299749635, 0, 2, 'Sun Nov 13 2022 20:04:53 GMT+0530 (India Standard Time)'),
(100000000000122, 'kahof14166@24rumen.com', 5003299749636, 0, 10, 'Sun Nov 13 2022 21:45:52 GMT+0530 (India Standard Time)'),
(100000000000200, 'ksdkdls@kkke', 5003299749637, 1, 56, 'Sun Nov 13 2022 23:27:53 GMT+0530 (India Standard Time)'),
(100000000000125, 'jotika3304@3mkz.com', 5003299749638, 0, 56, 'Wed Nov 23 2022 18:40:35 GMT+0530 (India Standard Time)'),
(100000000000200, 'ksdkdls@kkke', 5003299749639, 10, 545, 'Sun Feb 05 2023 18:58:44 GMT+0530 (India Standard Time)'),
(100000000000125, 'jotika3304@3mkz.com', 5003299749640, 0, 6, 'Tue Feb 07 2023 18:29:58 GMT+0530 (India Standard Time)');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile` bigint(10) NOT NULL,
  `branchName` varchar(255) NOT NULL,
  `branchAddress` varchar(255) NOT NULL,
  `branchCode` varchar(255) NOT NULL,
  `ifsc` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `branchEmail` varchar(255) NOT NULL,
  `branchPhone` varchar(255) NOT NULL,
  `micr` varchar(255) NOT NULL,
  `createdAt` varchar(255) NOT NULL,
  `updatedAt` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT 0,
  `isVerified` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `name`, `email`, `mobile`, `branchName`, `branchAddress`, `branchCode`, `ifsc`, `city`, `branchEmail`, `branchPhone`, `micr`, `createdAt`, `updatedAt`, `isAdmin`, `isVerified`) VALUES
(100000000000119, 'Megha Das', 'cowiniw908@dicopto.com', 9199, '', '', '', '', '', '', '', '', 'Tue Oct 18 2022 23:37:43 GMT+0530 (India Standard Time)', 'Wed Nov 23 2022 18:39:24 GMT+0530 (India Standard Time)', 0, 1),
(100000000000122, 'eScan Mobile ', 'kahof14166@24rumen.com', 887740, '', '', '', '', '', '', '', '', 'Wed Oct 26 2022 21:45:09 GMT+0530 (India Standard Time)', 'Wed Oct 26 2022 21:46:19 GMT+0530 (India Standard Time)', 0, 1),
(100000000000125, 'Abhishek Kumar', 'jotika3304@3mkz.com', 2333, '', '', '', '', '', '', '', '', 'Sat Oct 29 2022 17:36:09 GMT+0530 (India Standard Time)', 'Sat Oct 29 2022 18:41:07 GMT+0530 (India Standard Time)', 0, 1),
(100000000000128, 'What\'s My Name!', 'jotikadff04@3mkz.com', 23333, '', '', '', '', '', '', '', '', 'Sat Oct 29 2022 17:44:48 GMT+0530 (India Standard Time)', 'Sun Nov 13 2022 23:26:22 GMT+0530 (India Standard Time)', 0, 0),
(100000000000131, 'Piyush Kumar', 'ilovepiyushji@gmail.com', 9199530353, 'BAIJNATHPUR', '', '12645', 'SBIN0012645', 'BAIJNATHPUR', 'sbi.12645@sbi.co.in', '9771416355', '12645645', 'Sat Oct 29 2022 21:06:32 GMT+0530 (India Standard Time)', 'Sun Nov 13 2022 23:32:59 GMT+0530 (India Standard Time)', 0, 1),
(100000000000134, 'User 61', 'sbi.61@onlinemail.com', 979341581, 'Baijnathpur61', '', '62', 'SBIN00000061', 'Saharsa61', 'branchEmail61@sbi.co.in', '9607301315', '8729001', 'Tue Nov 08 2022 23:16:33 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:33 GMT+0530 (India Standard Time)', 0, 0),
(100000000000135, 'User 56', 'sbi.56@onlinemail.com', 3952790640, 'Baijnathpur56', '', '57', 'SBIN00000056', 'Saharsa56', 'branchEmail56@sbi.co.in', '9976471760', '8729001', 'Tue Nov 08 2022 23:16:34 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:34 GMT+0530 (India Standard Time)', 0, 0),
(100000000000138, 'User 100', 'sbi.100@onlinemail.com', 8263576513, 'Baijnathpur100', '', '101', 'SBIN000000100', 'Saharsa100', 'branchEmail100@sbi.co.in', '873153487', '8729001', 'Tue Nov 08 2022 23:16:35 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:35 GMT+0530 (India Standard Time)', 0, 0),
(100000000000140, 'User 11', 'sbi.11@onlinemail.com', 8843338594, 'Baijnathpur11', '', '12', 'SBIN00000011', 'Saharsa11', 'branchEmail11@sbi.co.in', '8720530442', '8729001', 'Tue Nov 08 2022 23:16:36 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:36 GMT+0530 (India Standard Time)', 0, 0),
(100000000000141, 'User 36', 'sbi.36@onlinemail.com', 2211268825, 'Baijnathpur36', '', '37', 'SBIN00000036', 'Saharsa36', 'branchEmail36@sbi.co.in', '2564579411', '8729001', 'Tue Nov 08 2022 23:16:37 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:37 GMT+0530 (India Standard Time)', 0, 0),
(100000000000142, 'User 51', 'sbi.51@onlinemail.com', 5085207538, 'Baijnathpur51', '', '52', 'SBIN00000051', 'Saharsa51', 'branchEmail51@sbi.co.in', '5210117734', '8729001', 'Tue Nov 08 2022 23:16:37 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:37 GMT+0530 (India Standard Time)', 0, 0),
(100000000000143, 'User 86', 'sbi.86@onlinemail.com', 2478857493, 'Baijnathpur86', '', '87', 'SBIN00000086', 'Saharsa86', 'branchEmail86@sbi.co.in', '228440621', '8729001', 'Tue Nov 08 2022 23:16:38 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:38 GMT+0530 (India Standard Time)', 0, 0),
(100000000000144, 'User 59', 'sbi.59@onlinemail.com', 542867918, 'Baijnathpur59', '', '60', 'SBIN00000059', 'Saharsa59', 'branchEmail59@sbi.co.in', '2440537989', '8729001', 'Tue Nov 08 2022 23:16:38 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:38 GMT+0530 (India Standard Time)', 0, 0),
(100000000000145, 'User 64', 'sbi.64@onlinemail.com', 5421601639, 'Baijnathpur64', '', '65', 'SBIN00000064', 'Saharsa64', 'branchEmail64@sbi.co.in', '6642842899', '8729001', 'Tue Nov 08 2022 23:16:39 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:39 GMT+0530 (India Standard Time)', 0, 0),
(100000000000146, 'User 10', 'sbi.10@onlinemail.com', 3886292950, 'Baijnathpur10', '', '11', 'SBIN00000010', 'Saharsa10', 'branchEmail10@sbi.co.in', '8528772148', '8729001', 'Tue Nov 08 2022 23:16:39 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:39 GMT+0530 (India Standard Time)', 0, 0),
(100000000000147, 'User 6', 'sbi.6@onlinemail.com', 9959855271, 'Baijnathpur6', '', '7', 'SBIN0000006', 'Saharsa6', 'branchEmail6@sbi.co.in', '8130358623', '8729001', 'Tue Nov 08 2022 23:16:40 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:40 GMT+0530 (India Standard Time)', 0, 0),
(100000000000148, 'User 48', 'sbi.48@onlinemail.com', 2869084934, 'Baijnathpur48', '', '49', 'SBIN00000048', 'Saharsa48', 'branchEmail48@sbi.co.in', '6824528722', '8729001', 'Tue Nov 08 2022 23:16:40 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:40 GMT+0530 (India Standard Time)', 0, 0),
(100000000000149, 'User 54', 'sbi.54@onlinemail.com', 8301081598, 'Baijnathpur54', '', '55', 'SBIN00000054', 'Saharsa54', 'branchEmail54@sbi.co.in', '7922676316', '8729001', 'Tue Nov 08 2022 23:16:41 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:41 GMT+0530 (India Standard Time)', 0, 0),
(100000000000151, 'User 17', 'sbi.17@onlinemail.com', 3213231115, 'Baijnathpur17', '', '18', 'SBIN00000017', 'Saharsa17', 'branchEmail17@sbi.co.in', '2553179539', '8729001', 'Tue Nov 08 2022 23:16:42 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:42 GMT+0530 (India Standard Time)', 0, 0),
(100000000000152, 'User 28', 'sbi.28@onlinemail.com', 5482841174, 'Baijnathpur28', '', '29', 'SBIN00000028', 'Saharsa28', 'branchEmail28@sbi.co.in', '9143818781', '8729001', 'Tue Nov 08 2022 23:16:42 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:42 GMT+0530 (India Standard Time)', 0, 0),
(100000000000153, 'User 55', 'sbi.55@onlinemail.com', 8020836758, 'Baijnathpur55', '', '56', 'SBIN00000055', 'Saharsa55', 'branchEmail55@sbi.co.in', '7459292377', '8729001', 'Tue Nov 08 2022 23:16:43 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:43 GMT+0530 (India Standard Time)', 0, 0),
(100000000000154, 'User 2', 'sbi.2@onlinemail.com', 3074982112, 'Baijnathpur2', '', '3', 'SBIN0000002', 'Saharsa2', 'branchEmail2@sbi.co.in', '7076394556', '8729001', 'Tue Nov 08 2022 23:16:43 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:43 GMT+0530 (India Standard Time)', 0, 0),
(100000000000155, 'User 4', 'sbi.4@onlinemail.com', 9426278191, 'Baijnathpur4', '', '5', 'SBIN0000004', 'Saharsa4', 'branchEmail4@sbi.co.in', '4965848372', '8729001', 'Tue Nov 08 2022 23:16:44 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:44 GMT+0530 (India Standard Time)', 0, 0),
(100000000000156, 'User 18', 'sbi.18@onlinemail.com', 8054455054, 'Baijnathpur18', '', '19', 'SBIN00000018', 'Saharsa18', 'branchEmail18@sbi.co.in', '6797566774', '8729001', 'Tue Nov 08 2022 23:16:44 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:44 GMT+0530 (India Standard Time)', 0, 0),
(100000000000157, 'User 84', 'sbi.84@onlinemail.com', 1753833696, 'Baijnathpur84', '', '85', 'SBIN00000084', 'Saharsa84', 'branchEmail84@sbi.co.in', '6056563125', '8729001', 'Tue Nov 08 2022 23:16:45 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:45 GMT+0530 (India Standard Time)', 0, 0),
(100000000000158, 'User 30', 'sbi.30@onlinemail.com', 5253817245, 'Baijnathpur30', '', '31', 'SBIN00000030', 'Saharsa30', 'branchEmail30@sbi.co.in', '6135400907', '8729001', 'Tue Nov 08 2022 23:16:45 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:45 GMT+0530 (India Standard Time)', 0, 0),
(100000000000159, 'User 38', 'sbi.38@onlinemail.com', 5838382653, 'Baijnathpur38', '', '39', 'SBIN00000038', 'Saharsa38', 'branchEmail38@sbi.co.in', '4950736409', '8729001', 'Tue Nov 08 2022 23:16:46 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:46 GMT+0530 (India Standard Time)', 0, 0),
(100000000000160, 'User 92', 'sbi.92@onlinemail.com', 5489724989, 'Baijnathpur92', '', '93', 'SBIN00000092', 'Saharsa92', 'branchEmail92@sbi.co.in', '8000232773', '8729001', 'Tue Nov 08 2022 23:16:46 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:46 GMT+0530 (India Standard Time)', 0, 0),
(100000000000163, 'User 80', 'sbi.80@onlinemail.com', 1104598010, 'Baijnathpur80', '', '81', 'SBIN00000080', 'Saharsa80', 'branchEmail80@sbi.co.in', '8023853428', '8729001', 'Tue Nov 08 2022 23:16:48 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:16:48 GMT+0530 (India Standard Time)', 0, 0),
(100000000000165, 'User 16', 'sbi.16@onlinemail.com', 6451090586, 'Baijnathpur16', '', '17', 'SBIN00000016', 'Saharsa16', 'branchEmail16@sbi.co.in', '2476471347', '8729001', 'Tue Nov 08 2022 23:17:26 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:17:26 GMT+0530 (India Standard Time)', 0, 0),
(100000000000168, 'User 75', 'sbi.75@onlinemail.com', 5736060567, 'Baijnathpur75', '', '76', 'SBIN00000075', 'Saharsa75', 'branchEmail75@sbi.co.in', '579735203', '8729001', 'Tue Nov 08 2022 23:17:29 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:17:29 GMT+0530 (India Standard Time)', 0, 0),
(100000000000169, 'User 90', 'sbi.90@onlinemail.com', 5837766524, 'Baijnathpur90', '', '91', 'SBIN00000090', 'Saharsa90', 'branchEmail90@sbi.co.in', '3324481423', '8729001', 'Tue Nov 08 2022 23:17:30 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:17:30 GMT+0530 (India Standard Time)', 0, 0),
(100000000000171, 'User 45', 'sbi.45@onlinemail.com', 3917835875, 'Baijnathpur45', '', '46', 'SBIN00000045', 'Saharsa45', 'branchEmail45@sbi.co.in', '9380391710', '8729001', 'Tue Nov 08 2022 23:17:32 GMT+0530 (India Standard Time)', 'Tue Nov 08 2022 23:17:32 GMT+0530 (India Standard Time)', 0, 0),
(100000000000196, 'New Admin', 'new@admin', 12345, 'no', '', 'no', 'no', 'no', 'no@nooo', '239', '233', 'Sat Nov 12 2022 19:21:52 GMT+0530 (India Standard Time)', 'Sat Nov 12 2022 19:21:52 GMT+0530 (India Standard Time)', 1, 1),
(100000000000200, 'Updated User', 'updated.again@test.com', 919950353, 'baijnnathpur', '', 'sbin0012645', 'SBIN0002233', 'Kolkata', 'kolkata.sbi@sbi.co.in', '675434', '900293', 'Sat Nov 12 2022 20:11:07 GMT+0530 (India Standard Time)', 'Sun Nov 13 2022 23:29:52 GMT+0530 (India Standard Time)', 0, 1),
(100000000000201, '', '', 0, '', '', '', '', '', '', '', '', 'Tue Feb 07 2023 18:23:56 GMT+0530 (India Standard Time)', 'Tue Feb 07 2023 18:23:56 GMT+0530 (India Standard Time)', 0, 0),
(100000000000204, 'df', 'gigevo2665@crtsec.com', 9199530356, '', '', '', '', '', '', '', '', 'Tue Feb 07 2023 18:25:22 GMT+0530 (India Standard Time)', 'Tue Feb 07 2023 18:25:22 GMT+0530 (India Standard Time)', 0, 0),
(100000000000205, 'Abhishek Kumar', 'vomebi7705@otanhome.com', 73610810, 'Bihar', 'India', '001', 'BIHAR00001', 'Patna', 'sbi.001@sbi.co.in', '89898989', '565665', 'Mon Feb 20 2023 18:51:41 GMT+0530 (India Standard Time)', 'Mon Feb 20 2023 18:52:12 GMT+0530 (India Standard Time)', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `usertoken`
--

CREATE TABLE `usertoken` (
  `id` bigint(15) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `token` int(11) NOT NULL DEFAULT 0,
  `usedToken` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usertoken`
--

INSERT INTO `usertoken` (`id`, `name`, `email`, `token`, `usedToken`) VALUES
(100000000000119, 'Megha Das', 'cowiniw908@dicopto.com', 0, 0),
(100000000000121, '', '', 0, 0),
(100000000000122, 'eScan Mobile ', 'kahof14166@24rumen.com', 10, 2),
(100000000000125, 'Abhishek Kumar', 'jotika3304@3mkz.com', 6, 14),
(100000000000128, 'Abhishek Kumar', 'jotikadff04@3mkz.com', 5, 0),
(100000000000131, 'piyush', 'ilovepiyushji@gmail.com', 5636, 25),
(100000000000200, 'nnnnn', 'ksdkdls@kkke', 555, 2),
(100000000000204, 'df', 'gigevo2665@crtsec.com', 0, 0),
(100000000000205, 'Abhishek Kumar', 'vomebi7705@otanhome.com', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth`
--
ALTER TABLE `auth`
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `deletedusers`
--
ALTER TABLE `deletedusers`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `token-history`
--
ALTER TABLE `token-history`
  ADD UNIQUE KEY `transactionId` (`transactionId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `mobile` (`mobile`);

--
-- Indexes for table `usertoken`
--
ALTER TABLE `usertoken`
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `token-history`
--
ALTER TABLE `token-history`
  MODIFY `transactionId` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5003299749641;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100000000000207;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
