import {defineQuery} from "next-sanity";
import {ALL_POSTS_QUERYResult} from "@/sanity/types/sanity.types";

const ALL_POSTS_QUERY = defineQuery(`*[_type == "post"] {..., author->}`);

const POST_BY_SLUG_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0] {..., author->}`);


export {ALL_POSTS_QUERY, POST_BY_SLUG_QUERY};