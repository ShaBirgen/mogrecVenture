CREATE OR ALTER PROCEDURE deleteUser(@id VARCHAR(100))
AS
BEGIN
    DELETE FROM Users
    WHERE id = @id
END

