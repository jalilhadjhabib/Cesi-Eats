USE [CESI-EATS]
GO

/****** Object:  Table [dbo].[Restorateur]    Script Date: 12/06/2022 20:30:32 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Restorateur](
	[RestorateurID] [uniqueidentifier] NOT NULL,
	[Mail] [varchar](50) NULL,
	[MailStatus] [binary](50) NULL,
	[Password] [varchar](max) NULL,
	[Name] [varchar](50) NULL,
	[Phone] [varchar](50) NULL,
	[ParainStatus] [varchar](50) NULL,
	[ParainName] [varchar](50) NULL,
	[FilleulStatus] [varchar](50) NOT NULL,
	[FilleulName] [varchar](50) NULL,
 CONSTRAINT [Pk_Restorateur] PRIMARY KEY CLUSTERED 
(
	[RestorateurID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

