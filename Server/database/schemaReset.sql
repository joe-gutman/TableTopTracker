\c tableTopGamers

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS friends CASCADE;
DROP TABLE IF EXISTS games CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS purchase_locations CASCADE;
DROP TABLE IF EXISTS game_videos CASCADE;
DROP TABLE IF EXISTS game_images CASCADE;
DROP TABLE IF EXISTS collections CASCADE;
DROP TABLE IF EXISTS collections_games_join CASCADE;
DROP TABLE IF EXISTS wishlists CASCADE;
DROP TABLE IF EXISTS wishlists_games_join CASCADE;
DROP TABLE IF EXISTS owned CASCADE;
DROP TABLE IF EXISTS owned_games_join CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(64),
  user_id varchar(64) unique,
  email varchar(32),
  photo varchar(64),
  games_owned int,
  games_wishlisted int,
  collections int
);

create table friends (
  id serial primary key,
  user_id int,
  friend_id int,

  foreign key (user_id) references users(id),
  foreign key (friend_id) references users(id)
);

alter table friends
add constraint user_friend_combo
unique (user_id, friend_id);

create table games (
  id serial primary key,
  bgg_id int,
  title varchar(64) unique,
  description text,
  minplayers int,
  maxplayers int,
  minplaytime int,
  maxplaytime int,
  age int,
  complexity decimal,
  year_published int,
  thumbnail varchar(256),
  more_info varchar(256)
);

create table categories (
  id serial primary key,
  game_id int,
  category_name varchar(16),

  foreign key (game_id) references games(id)
);

create table purchase_locations (
  id serial primary key,
  game_id int,
  purchase_location varchar(64),

  foreign key (game_id) references games(id)
);

create table game_videos (
  id serial primary key,
  game_id int,
  video varchar(64),

  foreign key (game_id) references games(id)
);

create table game_images (
  id serial primary key,
  game_id int,
  image varchar(64),

  foreign key (game_id) references games(id)
);

create table collections (
  id serial primary key,
  user_id int,
  collection_name varchar(32),
  public boolean,

  foreign key (user_id) references users(id)
);

create table collections_games_join (
  id serial primary key,
  collection_id int,
  game_id int,

  foreign key (collection_id) references collections(id),
  foreign key (game_id) references games(id)
);

create table owned_games_join (
  id serial primary key,
  user_id int,
  game_id int,

  foreign key (user_id) references users(id),
  foreign key (game_id) references games(id)
);


--create table wishlists (
--  id serial primary key,
--  user_id int unique,
--  public boolean,
--
--  foreign key (user_id) references users(id)
--);
--
--create table wishlists_games_join (
--  id serial primary key,
--  wishlist_id int,
--  game_id int,
--
--  foreign key (wishlist_id) references wishlists(id),
--  foreign key (game_id) references games(id)
--);

--create table owned (
--  id serial primary key,
--  user_id int unique,
--  public boolean,
--
--  foreign key (user_id) references users(id)
--);


