USE [CESI-EATS]
GO

/****** Object:  Table [dbo].[Client_Logs]    Script Date: 12/06/2022 20:26:08 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Client_Logs](
	[LogID] [uniqueidentifier] NOT NULL,
	[LogInTime] [datetime] NULL,
	[LogOutTime] [datetime] NULL,
	[Client] [uniqueidentifier] NULL,
 CONSTRAINT [PK_Logs] PRIMARY KEY CLUSTERED 
(
	[LogID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Client_Logs]  WITH CHECK ADD  CONSTRAINT [FK_Logs_Client] FOREIGN KEY([Client])
REFERENCES [dbo].[Client] ([ClientID])
GO

ALTER TABLE [dbo].[Client_Logs] CHECK CONSTRAINT [FK_Logs_Client]
GO

