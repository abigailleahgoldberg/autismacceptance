"use client";

import { useState } from "react";
import type { Metadata } from "next";

// ── Bear silhouette SVG ──────────────────────────────────────────────────────
function BearSilhouette({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "60px", height: "60px", opacity: 0.55 }}
    >
      {/* ears */}
      <circle cx="28" cy="30" r="14" />
      <circle cx="72" cy="30" r="14" />
      {/* head */}
      <circle cx="50" cy="45" r="28" />
      {/* body */}
      <ellipse cx="50" cy="82" rx="24" ry="18" />
    </svg>
  );
}

// ── Types ────────────────────────────────────────────────────────────────────
type Category = "All" | "Tees" | "Hoodies" | "Hats" | "Accessories";

interface PlaceholderProduct {
  id: number;
  name: string;
  price: string;
  category: Category;
  accentColor: string;
  sizes: string[];
}

// ── Placeholder product data ─────────────────────────────────────────────────
const PLACEHOLDER_PRODUCTS: PlaceholderProduct[] = [
  {
    id: 1,
    name: "Acceptance Over Awareness",
    price: "$34.99",
    category: "Tees",
    accentColor: "#6B21A8",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: 2,
    name: "Different Not Less",
    price: "$59.99",
    category: "Hoodies",
    accentColor: "#4C1D95",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: 3,
    name: "Neurodivergent & Proud",
    price: "$32.99",
    category: "Tees",
    accentColor: "#7C3AED",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: 4,
    name: "Stimming Is Self-Care",
    price: "$34.99",
    category: "Tees",
    accentColor: "#5B21B6",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: 5,
    name: "Actually Autistic",
    price: "$28.99",
    category: "Hats",
    accentColor: "#D97706",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: 6,
    name: "Spectrum Dad",
    price: "$59.99",
    category: "Hoodies",
    accentColor: "#4C1D95",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: 7,
    name: "Autism Parent Ally",
    price: "$34.99",
    category: "Tees",
    accentColor: "#6B21A8",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: 8,
    name: "Bearish & Beautiful",
    price: "$24.99",
    category: "Accessories",
    accentColor: "#92400E",
    sizes: ["One Size"],
  },
];

const CATEGORIES: Category[] = ["All", "Tees", "Hoodies", "Hats", "Accessories"];

// ── Product card ─────────────────────────────────────────────────────────────
function ProductCard({ product }: { product: PlaceholderProduct }) {
  const [size, setSize] = useState(product.sizes[0]);
  const [hovered, setHovered] = useState(false);

  function handleBuyNow() {
    alert("Store coming soon! Check back shortly.");
  }

  return (
    <article
      style={{
        backgroundColor: hovered
          ? "rgba(107, 33, 168, 0.14)"
          : "rgba(107, 33, 168, 0.07)",
        border: hovered
          ? "1px solid rgba(168, 85, 247, 0.45)"
          : "1px solid rgba(168, 85, 247, 0.2)",
        borderRadius: "14px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.2s, background-color 0.2s, transform 0.2s",
        transform: hovered ? "translateY(-3px)" : "none",
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image placeholder */}
      <div
        style={{
          background: `linear-gradient(135deg, ${product.accentColor}22 0%, ${product.accentColor}44 100%)`,
          height: "220px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "0.5rem",
          borderBottom: "1px solid rgba(168, 85, 247, 0.15)",
          position: "relative",
        }}
        aria-hidden="true"
      >
        <BearSilhouette color={product.accentColor} />
        {/* Reinvested badge */}
        <span
          style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            backgroundColor: "rgba(9, 8, 15, 0.75)",
            border: "1px solid rgba(168, 85, 247, 0.3)",
            color: "rgba(250, 250, 248, 0.7)",
            fontSize: "0.6875rem",
            fontWeight: 600,
            padding: "0.2rem 0.5rem",
            borderRadius: "4px",
            letterSpacing: "0.03em",
          }}
        >
          100% profits reinvested
        </span>
      </div>

      {/* Card body */}
      <div
        style={{
          padding: "1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          flex: 1,
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.6875rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "rgba(250, 250, 248, 0.4)",
              marginBottom: "0.25rem",
            }}
          >
            {product.category}
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              fontWeight: 700,
              color: "#FAFAF8",
              lineHeight: 1.3,
              marginBottom: 0,
            }}
          >
            {product.name}
          </p>
        </div>

        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: 900,
            color: "#A855F7",
            letterSpacing: "-0.02em",
            marginBottom: 0,
          }}
        >
          {product.price}
        </p>

        {/* Size selector */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
          <label
            htmlFor={`size-${product.id}`}
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "rgba(250, 250, 248, 0.5)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            Size
          </label>
          <select
            id={`size-${product.id}`}
            value={size}
            onChange={(e) => setSize(e.target.value)}
            style={{
              backgroundColor: "rgba(9, 8, 15, 0.7)",
              border: "1px solid rgba(168, 85, 247, 0.3)",
              borderRadius: "6px",
              color: "#FAFAF8",
              fontSize: "0.9375rem",
              padding: "0.45rem 0.75rem",
              fontFamily: "inherit",
              outline: "none",
              cursor: "pointer",
              appearance: "none",
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23A855F7' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              paddingRight: "2rem",
            }}
          >
            {product.sizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Buy Now */}
        <button
          onClick={handleBuyNow}
          style={{
            backgroundColor: "#6B21A8",
            color: "#FAFAF8",
            border: "none",
            borderRadius: "8px",
            padding: "0.75rem 1rem",
            fontSize: "0.9375rem",
            fontWeight: 700,
            cursor: "pointer",
            marginTop: "auto",
            transition: "background-color 0.2s",
            fontFamily: "inherit",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#7C3AED";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#6B21A8";
          }}
        >
          Buy Now
        </button>
      </div>
    </article>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered =
    activeFilter === "All"
      ? PLACEHOLDER_PRODUCTS
      : PLACEHOLDER_PRODUCTS.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: "5rem 1.5rem 3.5rem",
          textAlign: "center",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(107, 33, 168, 0.2) 0%, transparent 70%)",
        }}
        aria-labelledby="shop-heading"
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h1
            id="shop-heading"
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
              fontWeight: 900,
              color: "#FAFAF8",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              marginBottom: "1.25rem",
            }}
          >
            Support the Movement
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.1875rem)",
              color: "rgba(250, 250, 248, 0.7)",
              lineHeight: 1.7,
              marginBottom: "0.875rem",
            }}
          >
            Every purchase funds autism acceptance programs. 100% of profits reinvested.
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              color: "rgba(250, 250, 248, 0.4)",
              fontStyle: "italic",
              marginBottom: 0,
            }}
          >
            We are not doctors. We are advocates.
          </p>
        </div>
      </section>

      {/* Merch from WeBearish */}
      <section
        style={{
          backgroundColor: "rgba(107, 33, 168, 0.08)",
          borderTop: "1px solid rgba(168, 85, 247, 0.15)",
          borderBottom: "1px solid rgba(168, 85, 247, 0.15)",
          padding: "1rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.875rem",
            color: "rgba(250, 250, 248, 0.5)",
            marginBottom: 0,
          }}
        >
          Adult autism acceptance merch in partnership with{" "}
          <a
            href="https://webearish.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#A855F7", fontWeight: 600 }}
          >
            WeBearish
          </a>
        </p>
      </section>

      {/* Filters */}
      <section
        style={{ padding: "2.5rem 1.5rem 0", maxWidth: "1200px", margin: "0 auto" }}
        aria-label="Filter products"
      >
        <div
          style={{
            display: "flex",
            gap: "0.625rem",
            flexWrap: "wrap",
          }}
          role="group"
          aria-label="Product category filters"
        >
          {CATEGORIES.map((cat) => {
            const active = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                aria-pressed={active}
                style={{
                  backgroundColor: active ? "#6B21A8" : "transparent",
                  border: active
                    ? "1px solid #6B21A8"
                    : "1px solid rgba(168, 85, 247, 0.3)",
                  color: active ? "#FAFAF8" : "rgba(250, 250, 248, 0.65)",
                  borderRadius: "20px",
                  padding: "0.45rem 1.125rem",
                  fontSize: "0.9rem",
                  fontWeight: active ? 700 : 500,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.18s",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Product grid */}
      <section
        style={{ padding: "2rem 1.5rem 4rem", maxWidth: "1200px", margin: "0 auto" }}
        aria-label="Products"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Mission strip */}
      <section
        style={{
          backgroundColor: "rgba(107, 33, 168, 0.1)",
          borderTop: "1px solid rgba(168, 85, 247, 0.2)",
          borderBottom: "1px solid rgba(168, 85, 247, 0.2)",
          padding: "3rem 1.5rem",
          textAlign: "center",
        }}
        aria-label="Mission statement"
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
              fontWeight: 800,
              color: "#FAFAF8",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Why we built this store
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(250, 250, 248, 0.65)",
              lineHeight: 1.75,
              marginBottom: "1rem",
            }}
          >
            We are not selling awareness. We are not selling puzzle pieces. We are not selling
            inspiration porn. We are autistic and autistic-allied adults who believe acceptance
            is not a bumper sticker slogan — it is a practice.
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(250, 250, 248, 0.65)",
              lineHeight: 1.75,
              marginBottom: "0.5rem",
            }}
          >
            Every dollar of profit from this store goes back into running
            autismacceptance.world — keeping it free, keeping it growing, keeping it run by the
            community.
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              color: "rgba(250, 250, 248, 0.35)",
              fontStyle: "italic",
              marginBottom: 0,
            }}
          >
            We are not doctors. We are advocates.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "2.5rem auto",
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(217, 119, 6, 0.06)",
            border: "1px solid rgba(217, 119, 6, 0.2)",
            borderRadius: "8px",
            padding: "1.125rem 1.5rem",
          }}
          role="note"
          aria-label="Disclaimer"
        >
          <p
            style={{
              fontSize: "0.8125rem",
              color: "rgba(250, 250, 248, 0.45)",
              lineHeight: 1.6,
              marginBottom: 0,
            }}
          >
            <strong style={{ color: "rgba(250, 250, 248, 0.65)" }}>Disclaimer:</strong> This
            site is not a medical resource. Nothing sold here is intended as therapy, treatment,
            or medical advice. We use identity-first language because that is what the majority
            of the autistic community prefers. If you prefer person-first, we respect that.
          </p>
        </div>
      </div>
    </>
  );
}
