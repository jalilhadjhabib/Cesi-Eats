USE [CESI-EATS]
GO

/****** Object:  Table [dbo].[Client]    Script Date: 12/06/2022 20:25:52 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Client](
	[ClientID] [uniqueidentifier] NOT NULL,
	[Mail] [varchar](50) NULL,
	[MailStatus] [binary](50) NULL,
	[Password] [varchar](max) NULL,
	[Name] [varchar](50) NULL,
	[Phone] [varchar](50) NULL,
	[CreditCard] [int] NULL,
	[ParainStatus] [varchar](50) NULL,
	[ParainName] [varchar](50) NULL,
	[FilleulStatus] [varchar](50) NULL,
	[FilleulName] [varchar](50) NULL,
	[ConnectionStatus] [bit] NULL,
 CONSTRAINT [PK_Client] PRIMARY KEY CLUSTERED 
(
	[ClientID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

