USE [CESI-EATS]
GO

/****** Object:  Table [dbo].[Market]    Script Date: 12/06/2022 20:29:58 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Market](
	[MarketID] [uniqueidentifier] NOT NULL,
	[Mail] [varchar](50) NULL,
	[MailStatus] [binary](50) NULL,
	[Password] [varchar](max) NULL,
	[Name] [varchar](50) NULL,
	[Phone] [varchar](50) NULL,
	[ConnectionStatus] [bit] NULL,
	[ClientID] [uniqueidentifier] NULL,
 CONSTRAINT [Pk_Market] PRIMARY KEY CLUSTERED 
(
	[MarketID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Market]  WITH CHECK ADD  CONSTRAINT [FK_Market_Client] FOREIGN KEY([ClientID])
REFERENCES [dbo].[Client] ([ClientID])
GO

ALTER TABLE [dbo].[Market] CHECK CONSTRAINT [FK_Market_Client]
GO

