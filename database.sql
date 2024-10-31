-- postgressql

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);

CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    content TEXT,
    Sheare INTEGER DEFAULT 0,

    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    user_id INTEGER REFERENCES users(id)
);

CREATE TABLE posts_tags (
    post_id INTEGER REFERENCES posts(id),
    tag_id INTEGER REFERENCES tags(id),
    PRIMARY KEY (post_id, tag_id)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    content TEXT,
    
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    user_id INTEGER REFERENCES users(id),
    post_id INTEGER REFERENCES posts(id)
);

CREATE TABLE posts_likes (
    post_id INTEGER REFERENCES posts(id),
    user_id INTEGER REFERENCES users(id),
    PRIMARY KEY (post_id, user_id)
);

CREATE TABLE comments_likes (
    comment_id INTEGER REFERENCES comments(id),
    user_id INTEGER REFERENCES users(id),
    PRIMARY KEY (comment_id, user_id)
);
