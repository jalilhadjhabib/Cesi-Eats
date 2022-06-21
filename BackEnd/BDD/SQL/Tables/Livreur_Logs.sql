USE [CESI-EATS]
GO

/****** Object:  Table [dbo].[Livreur_Logs]    Script Date: 12/06/2022 20:29:03 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Livreur_Logs](
	[LogsId] [uniqueidentifier] NOT NULL,
	[LogInTime] [datetime] NULL,
	[LogOutTime] [datetime] NULL,
	[LivreurID] [uniqueidentifier] NULL,
 CONSTRAINT [PK_Livreur_Logs] PRIMARY KEY CLUSTERED 
(
	[LogsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Livreur_Logs]  WITH CHECK ADD  CONSTRAINT [FK_Livreur_Logs] FOREIGN KEY([LivreurID])
REFERENCES [dbo].[Livreur] ([LivreurID])
GO

ALTER TABLE [dbo].[Livreur_Logs] CHECK CONSTRAINT [FK_Livreur_Logs]
GO

