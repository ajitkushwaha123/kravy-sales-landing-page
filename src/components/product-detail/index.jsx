"use client"
import { Zap } from "lucide-react"
import { formatPrice } from "@/lib/utils"
import { StarRating } from "@/components/general/star-rating"
import { TrustBadges } from "@/components/product-detail/fragments/trust-badges"
import { ProductGallery } from "@/components/product-detail/fragments/product-gallery"
import { ProductAccordion } from "@/components/product-detail/fragments/product-accordion"
import PayButton from "@/components/general/Payment/PayButton"

const ProductDetails = ({ product = {} }) => {

    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white/40 py-12 lg:px-8">
            <div className="max-w-6xl w-full mx-auto">
                <div className="bg-white rounded-3xl border border-zinc-100 overflow-hidden p-6 sm:p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
                        <div className="w-full pt-0">
                            <ProductGallery images={product?.images} discount={product?.discount} />
                        </div>

                        <div className="flex flex-col gap-6">
                            <div>
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 leading-tight tracking-tight">
                                    {product?.name}
                                </h1>
                            </div>

                            <div className="flex items-center gap-3 flex-wrap">
                                <StarRating rating={product?.rating} />
                                <span className="text-xs font-bold text-zinc-800 bg-zinc-100 px-2 py-0.5 rounded-md">
                                    {product?.rating}
                                </span>
                                <span className="text-xs text-zinc-400">
                                    {product?.reviewCount?.toLocaleString()} reviews
                                </span>
                            </div>

                            <div className="flex items-baseline gap-3.5 p-4 bg-gradient-to-r from-indigo-50/70 to-indigo-50/10 border border-indigo-50/50 rounded-2xl">
                                <span className="text-3xl font-black text-zinc-900">
                                    {formatPrice(product?.price)}
                                </span>

                                {product?.originalPrice && product.originalPrice > product.price && (
                                    <span className="text-sm text-zinc-400 line-through">
                                        {formatPrice(product?.originalPrice)}
                                    </span>
                                )}

                                {product?.discount && (
                                    <span className="text-[10px] font-bold bg-red-500 text-white px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm shadow-red-100">
                                        {product.discount}% OFF
                                    </span>
                                )}
                            </div>

                            <p className="text-[13.5px] text-zinc-500 leading-relaxed font-normal">
                                {product?.description}
                            </p>

                            <div className="h-px bg-zinc-100" />

                            <div className="pt-2 w-full max-w-[280px]">
                                <PayButton />
                            </div>

                            <div className="h-px bg-zinc-100" />

                            <TrustBadges badges={product?.badges} />

                            <ProductAccordion
                                details={product?.features}
                                shipping={product?.shipping}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails