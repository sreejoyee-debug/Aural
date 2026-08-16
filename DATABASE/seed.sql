-- Run after `npm run db:push` from BACKEND. Values use fixed UUIDs for repeatable local demos.
CREATE EXTENSION IF NOT EXISTS pgcrypto;

INSERT INTO "Artist" (id, name, "countryCode", "monthlyListeners", "createdAt") VALUES
  ('00000000-0000-0000-0000-000000000101', 'Luna Vale', 'GB', 421000, NOW()),
  ('00000000-0000-0000-0000-000000000102', 'Aerial Days', 'JP', 281000, NOW()),
  ('00000000-0000-0000-0000-000000000103', 'Sundial Club', 'IN', 164000, NOW())
ON CONFLICT (name) DO NOTHING;

INSERT INTO "Track" (id, title, album, "durationSeconds", "artistId", "audioFeatures", "createdAt") VALUES
  ('00000000-0000-0000-0000-000000000201', 'Glass Horizon', 'Afterimage', 222, '00000000-0000-0000-0000-000000000101', '{"energy":0.48,"tempo":102,"mood":"dream-pop"}', NOW()),
  ('00000000-0000-0000-0000-000000000202', 'Blue Hour', 'Quiet Satellites', 314, '00000000-0000-0000-0000-000000000102', '{"energy":0.35,"tempo":80,"mood":"ambient"}', NOW()),
  ('00000000-0000-0000-0000-000000000203', 'Night Signals', 'Tidal Sleep', 248, '00000000-0000-0000-0000-000000000103', '{"energy":0.62,"tempo":108,"mood":"indie"}', NOW())
ON CONFLICT (id) DO NOTHING;
