USE [CESI-EATS]
GO

/****** Object:  Table [dbo].[Tech_Logs]    Script Date: 12/06/2022 20:31:12 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Tech_Logs](
	[Logs] [uniqueidentifier] NOT NULL,
	[TechID] [uniqueidentifier] NULL,
	[LogInTime] [datetime] NULL,
	[LogOutTime] [datetime] NULL,
 CONSTRAINT [PK_Tech_Logs] PRIMARY KEY CLUSTERED 
(
	[Logs] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Tech_Logs]  WITH CHECK ADD  CONSTRAINT [FK_Tech_Logs] FOREIGN KEY([TechID])
REFERENCES [dbo].[Tech] ([TechID])
GO

ALTER TABLE [dbo].[Tech_Logs] CHECK CONSTRAINT [FK_Tech_Logs]
GO

