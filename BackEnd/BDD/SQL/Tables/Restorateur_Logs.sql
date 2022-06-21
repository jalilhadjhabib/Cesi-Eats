USE [CESI-EATS]
GO

/****** Object:  Table [dbo].[Restorateur_Logs]    Script Date: 12/06/2022 20:30:48 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Restorateur_Logs](
	[LogsID] [uniqueidentifier] NOT NULL,
	[RestorateurID] [uniqueidentifier] NULL,
	[LogInTime] [datetime] NULL,
	[LogOutTime] [datetime] NULL,
 CONSTRAINT [PK_Restorateur_Logs] PRIMARY KEY CLUSTERED 
(
	[LogsID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Restorateur_Logs]  WITH CHECK ADD  CONSTRAINT [FK_Restorateur_Logs] FOREIGN KEY([RestorateurID])
REFERENCES [dbo].[Restorateur] ([RestorateurID])
GO

ALTER TABLE [dbo].[Restorateur_Logs] CHECK CONSTRAINT [FK_Restorateur_Logs]
GO

