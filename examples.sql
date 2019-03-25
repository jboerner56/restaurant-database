-- user profile
    -- 1. get all columns for a user by id #
    select * from users
    where user_id = 1;
    --  1a. get only a few fields for pbulic version
    select first_name, email from users;
    --  1b. get all fields for private version
    select * from users;
    -- 2. get all favorites by a user by id #
    select * from favorites
    where user_id = 2;
    -- 3. get all reviews written by that user by id #

-- restaurant profile
    -- 1. get all info for a restaurant by id #
    -- 2. get all reviews for restaurant by id #
    -- 3. get avarage review for a restaurant by id #
    -- 4. get count of favorites for restaurant by id #
    -- 

-- restaurant search result
    -- 1a. get all matching rows for restaurant by name (NOT case sensitive)
    -- 1b. include average review
    -- 1c. include number of favorites
    -- 2. limit by miminum review
    -- 3. (bonus) pagination 