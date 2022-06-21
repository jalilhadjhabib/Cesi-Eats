USE [master]
GO

/****** Object:  Database [CESI-EATS]    Script Date: 12/06/2022 15:41:01 ******/
CREATE DATABASE [CESI-EATS]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CESI-EATS', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.CESIEATS\MSSQL\DATA\CESI-EATS.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'CESI-EATS_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.CESIEATS\MSSQL\DATA\CESI-EATS_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CESI-EATS].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [CESI-EATS] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [CESI-EATS] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [CESI-EATS] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [CESI-EATS] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [CESI-EATS] SET ARITHABORT OFF 
GO

ALTER DATABASE [CESI-EATS] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [CESI-EATS] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [CESI-EATS] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [CESI-EATS] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [CESI-EATS] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [CESI-EATS] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [CESI-EATS] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [CESI-EATS] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [CESI-EATS] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [CESI-EATS] SET  DISABLE_BROKER 
GO

ALTER DATABASE [CESI-EATS] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [CESI-EATS] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [CESI-EATS] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [CESI-EATS] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [CESI-EATS] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [CESI-EATS] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [CESI-EATS] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [CESI-EATS] SET RECOVERY FULL 
GO

ALTER DATABASE [CESI-EATS] SET  MULTI_USER 
GO

ALTER DATABASE [CESI-EATS] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [CESI-EATS] SET DB_CHAINING OFF 
GO

ALTER DATABASE [CESI-EATS] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [CESI-EATS] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [CESI-EATS] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [CESI-EATS] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO

ALTER DATABASE [CESI-EATS] SET QUERY_STORE = OFF
GO

ALTER DATABASE [CESI-EATS] SET  READ_WRITE 
GO
