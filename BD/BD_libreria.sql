--
-- PostgreSQL database dump
--

-- Dumped from database version 15.6
-- Dumped by pg_dump version 15.6

-- Started on 2024-03-31 16:00:53

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 16417)
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- TOC entry 3346 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16409)
-- Name: book; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.book (
    id integer NOT NULL,
    titulo character varying NOT NULL,
    autor character varying NOT NULL,
    publicacion integer NOT NULL
);


ALTER TABLE public.book OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16408)
-- Name: book_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.book_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.book_id_seq OWNER TO postgres;

--
-- TOC entry 3347 (class 0 OID 0)
-- Dependencies: 215
-- Name: book_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.book_id_seq OWNED BY public.book.id;


--
-- TOC entry 217 (class 1259 OID 16428)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    "userId" uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying NOT NULL,
    password character varying(70)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 3188 (class 2604 OID 16412)
-- Name: book id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book ALTER COLUMN id SET DEFAULT nextval('public.book_id_seq'::regclass);


--
-- TOC entry 3339 (class 0 OID 16409)
-- Dependencies: 216
-- Data for Name: book; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.book (id, titulo, autor, publicacion) FROM stdin;
3	Don Quijote de la Mancha	Miguel de Cervantes	1605
2	Divina comedia	Dante Alighieri	1265
4	Cien años de soledad	Gabriel García Márquez	1967
\.


--
-- TOC entry 3340 (class 0 OID 16428)
-- Dependencies: 217
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users ("userId", name, password) FROM stdin;
\.


--
-- TOC entry 3348 (class 0 OID 0)
-- Dependencies: 215
-- Name: book_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.book_id_seq', 4, true);


--
-- TOC entry 3193 (class 2606 OID 16435)
-- Name: users PK_8bf09ba754322ab9c22a215c919; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_8bf09ba754322ab9c22a215c919" PRIMARY KEY ("userId");


--
-- TOC entry 3191 (class 2606 OID 16416)
-- Name: book PK_a3afef72ec8f80e6e5c310b28a4; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book
    ADD CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY (id);


--
-- TOC entry 3195 (class 2606 OID 16437)
-- Name: users UQ_51b8b26ac168fbe7d6f5653e6cf; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "UQ_51b8b26ac168fbe7d6f5653e6cf" UNIQUE (name);


-- Completed on 2024-03-31 16:00:54

--
-- PostgreSQL database dump complete
--

