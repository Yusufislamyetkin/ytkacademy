-- ========================================================================
-- YTK Academy - Supabase Database Schema + Demo Hesabı
-- Supabase Dashboard > SQL Editor'da çalıştırın
-- ========================================================================

-- 1. USERS tablosu
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    points INT DEFAULT 0,
    solved_count INT DEFAULT 0,
    level INT DEFAULT 1,
    rank_val INT DEFAULT 1000,
    badges INT DEFAULT 0,
    streak INT DEFAULT 1,
    name_changed BOOLEAN DEFAULT FALSE,
    is_admin BOOLEAN DEFAULT FALSE,
    is_banned BOOLEAN DEFAULT FALSE,
    is_vip BOOLEAN DEFAULT FALSE,
    is_premium BOOLEAN DEFAULT FALSE,
    subscription VARCHAR(50) DEFAULT 'free',
    last_active_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    password_set_token VARCHAR(255),
    password_set_expires TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. SOLVED ROOMS tablosu
CREATE TABLE IF NOT EXISTS solved_rooms (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    room_id VARCHAR(50) NOT NULL,
    points_earned INT NOT NULL,
    solved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_user_room UNIQUE(user_id, room_id)
);

-- 3. ROOM PROGRESS tablosu
CREATE TABLE IF NOT EXISTS room_progress (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    room_id VARCHAR(50) NOT NULL,
    progress_percent INT DEFAULT 10,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_user_progress UNIQUE(user_id, room_id)
);

-- 4. CHAT MESSAGES tablosu
CREATE TABLE IF NOT EXISTS chat_messages (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    message TEXT NOT NULL,
    is_vip BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. UNLOCKED HINTS tablosu
CREATE TABLE IF NOT EXISTS unlocked_hints (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    room_id VARCHAR(50) NOT NULL,
    hint_index INT NOT NULL,
    unlocked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_user_hint UNIQUE(user_id, room_id, hint_index)
);

-- 6. BLOGS tablosu
CREATE TABLE IF NOT EXISTS blogs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    read_time VARCHAR(50) DEFAULT '5 dk',
    seo_title VARCHAR(255),
    meta_description TEXT,
    focus_keywords TEXT,
    canonical_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 7. DOC PROGRESS tablosu
CREATE TABLE IF NOT EXISTS user_doc_progress (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    doc_id VARCHAR(40) NOT NULL,
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_user_doc UNIQUE(user_id, doc_id)
);

-- 8. ORDERS tablosu (Ödeme takibi)
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE SET NULL,
    email VARCHAR(100) NOT NULL,
    name VARCHAR(100),
    plan_id VARCHAR(50) NOT NULL,
    plan_name VARCHAR(255) NOT NULL,
    amount INT NOT NULL,
    currency VARCHAR(10) DEFAULT 'TL',
    status VARCHAR(30) DEFAULT 'pending',
    paytr_merchant_oid VARCHAR(100) UNIQUE,
    paytr_hash VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    paid_at TIMESTAMP
);

-- ========================================================================
-- DEMO HESABI OLUŞTUR
-- Şifre: demo123456
-- ========================================================================
INSERT INTO users (
    name, email, password_hash,
    level, points, rank_val, streak, badges, solved_count,
    is_admin, is_banned, is_premium, is_vip, subscription,
    last_active_at, created_at
) VALUES (
    'Demo Kullanıcı',
    'demo@siberkampus.com',
    '$2b$10$WEG4MmaW1oWlTUD8e4B5dukxbtX3E935SssLfFNxv7FeCBGeUB5py',
    1, 0, 1000, 1, 0, 0,
    false, false, false, false, 'free',
    NOW(), NOW()
)
ON CONFLICT (email) DO NOTHING;
-- ========================================================================
