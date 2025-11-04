import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import google.generativeai as genai

# ✅ Load environment variables
load_dotenv()

# ✅ Get API Key
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise ValueError("❌ GEMINI_API_KEY not found in .env file")

# ✅ Configure Gemini
genai.configure(api_key=api_key)

# ✅ Create FastAPI app
app = FastAPI()

# ✅ Fix CORS issue (important!)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],  # frontend ka link
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Request model
class ChatRequest(BaseModel):
    message: str

# ✅ Simple test route
@app.get("/")
async def root():
    return {"message": "🚀 Backend is running fine!"}

# ✅ Chat route
@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        user_message = request.message
        model = genai.GenerativeModel("gemini-2.0-flash")  # ✅ correct model name
        response = model.generate_content(user_message)
        return {"reply": response.text}
    except Exception as e:
        return {"reply": f"⚠️ Error: {str(e)}"}





# import os
# from fastapi import FastAPI
# from pydantic import BaseModel
# from fastapi.middleware.cors import CORSMiddleware
# from dotenv import load_dotenv
# import google.generativeai as genai

# # Load environment variables
# load_dotenv()

# # Configure Gemini API
# api_key = os.getenv("GEMINI_API_KEY")
# if not api_key:
#     raise ValueError("❌ GEMINI_API_KEY not found in .env file")

# genai.configure(api_key=api_key)

# # FastAPI app
# app = FastAPI()

# # CORS middleware (frontend se connect hone ke liye)
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],  # You can restrict to your Next.js URL like "http://localhost:3000"
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Request model
# class ChatRequest(BaseModel):
#     message: str

# chat_history = []

# @app.post("/chat")
# async def chat(request: ChatRequest):
#     user_message = request.message
#     model = genai.GenerativeModel("gemini-2.5-flash")
#     response = model.generate_content(user_message)
#     chat_history.append({"user": user_message, "bot": response.text})
#     return {"reply": response.text, "history": chat_history}
