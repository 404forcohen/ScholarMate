"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/chat";
exports.ids = ["pages/api/chat"];
exports.modules = {

/***/ "@pinecone-database/pinecone":
/*!**********************************************!*\
  !*** external "@pinecone-database/pinecone" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@pinecone-database/pinecone");

/***/ }),

/***/ "langchain/chat_models/openai":
/*!***********************************************!*\
  !*** external "langchain/chat_models/openai" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = import("langchain/chat_models/openai");;

/***/ }),

/***/ "langchain/embeddings/openai":
/*!**********************************************!*\
  !*** external "langchain/embeddings/openai" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = import("langchain/embeddings/openai");;

/***/ }),

/***/ "langchain/prompts":
/*!************************************!*\
  !*** external "langchain/prompts" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("langchain/prompts");;

/***/ }),

/***/ "langchain/schema/output_parser":
/*!*************************************************!*\
  !*** external "langchain/schema/output_parser" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = import("langchain/schema/output_parser");;

/***/ }),

/***/ "langchain/schema/runnable":
/*!********************************************!*\
  !*** external "langchain/schema/runnable" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("langchain/schema/runnable");;

/***/ }),

/***/ "langchain/vectorstores/pinecone":
/*!**************************************************!*\
  !*** external "langchain/vectorstores/pinecone" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("langchain/vectorstores/pinecone");;

/***/ }),

/***/ "(api)/./config/pinecone.ts":
/*!****************************!*\
  !*** ./config/pinecone.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PINECONE_INDEX_NAME\": () => (/* binding */ PINECONE_INDEX_NAME),\n/* harmony export */   \"PINECONE_NAME_SPACE\": () => (/* binding */ PINECONE_NAME_SPACE)\n/* harmony export */ });\n/**\n * Change the namespace to the namespace on Pinecone you'd like to store your embeddings.\n */ if (!process.env.PINECONE_INDEX_NAME) {\n    throw new Error(\"Missing Pinecone index name in .env file\");\n}\nconst PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME ?? \"\";\nconst PINECONE_NAME_SPACE = \"pdf-test\"; //namespace is optional for your vectors\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvcGluZWNvbmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Q0FFQyxHQUVELElBQUksQ0FBQ0EsUUFBUUMsR0FBRyxDQUFDQyxtQkFBbUIsRUFBRTtJQUNwQyxNQUFNLElBQUlDLE1BQU0sNENBQTRDO0FBQzlELENBQUM7QUFFRCxNQUFNRCxzQkFBc0JGLFFBQVFDLEdBQUcsQ0FBQ0MsbUJBQW1CLElBQUk7QUFFL0QsTUFBTUUsc0JBQXNCLFlBQVksd0NBQXdDO0FBRTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3B0NC1sYW5nY2hhaW4tcGRmLWNoYXRib3QvLi9jb25maWcvcGluZWNvbmUudHM/NmYwOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENoYW5nZSB0aGUgbmFtZXNwYWNlIHRvIHRoZSBuYW1lc3BhY2Ugb24gUGluZWNvbmUgeW91J2QgbGlrZSB0byBzdG9yZSB5b3VyIGVtYmVkZGluZ3MuXG4gKi9cblxuaWYgKCFwcm9jZXNzLmVudi5QSU5FQ09ORV9JTkRFWF9OQU1FKSB7XG4gIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBQaW5lY29uZSBpbmRleCBuYW1lIGluIC5lbnYgZmlsZScpO1xufVxuXG5jb25zdCBQSU5FQ09ORV9JTkRFWF9OQU1FID0gcHJvY2Vzcy5lbnYuUElORUNPTkVfSU5ERVhfTkFNRSA/PyAnJztcblxuY29uc3QgUElORUNPTkVfTkFNRV9TUEFDRSA9ICdwZGYtdGVzdCc7IC8vbmFtZXNwYWNlIGlzIG9wdGlvbmFsIGZvciB5b3VyIHZlY3RvcnNcblxuZXhwb3J0IHsgUElORUNPTkVfSU5ERVhfTkFNRSwgUElORUNPTkVfTkFNRV9TUEFDRSB9O1xuIl0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJQSU5FQ09ORV9JTkRFWF9OQU1FIiwiRXJyb3IiLCJQSU5FQ09ORV9OQU1FX1NQQUNFIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config/pinecone.ts\n");

/***/ }),

/***/ "(api)/./pages/api/chat.ts":
/*!***************************!*\
  !*** ./pages/api/chat.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! langchain/embeddings/openai */ \"langchain/embeddings/openai\");\n/* harmony import */ var langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/vectorstores/pinecone */ \"langchain/vectorstores/pinecone\");\n/* harmony import */ var _utils_makechain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/makechain */ \"(api)/./utils/makechain.ts\");\n/* harmony import */ var _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/pinecone-client */ \"(api)/./utils/pinecone-client.ts\");\n/* harmony import */ var _config_pinecone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/pinecone */ \"(api)/./config/pinecone.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_1__, _utils_makechain__WEBPACK_IMPORTED_MODULE_2__, _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__]);\n([langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_1__, _utils_makechain__WEBPACK_IMPORTED_MODULE_2__, _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nasync function handler(req, res) {\n    const { question , history  } = req.body;\n    console.log(\"question\", question);\n    console.log(\"history\", history);\n    //only accept post requests\n    if (req.method !== \"POST\") {\n        res.status(405).json({\n            error: \"Method not allowed\"\n        });\n        return;\n    }\n    if (!question) {\n        return res.status(400).json({\n            message: \"No question in the request\"\n        });\n    }\n    // OpenAI recommends replacing newlines with spaces for best results\n    const sanitizedQuestion = question.trim().replaceAll(\"\\n\", \" \");\n    try {\n        const index = _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__.pinecone.Index(_config_pinecone__WEBPACK_IMPORTED_MODULE_4__.PINECONE_INDEX_NAME);\n        /* create vectorstore*/ const vectorStore = await langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_1__.PineconeStore.fromExistingIndex(new langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIEmbeddings({}), {\n            pineconeIndex: index,\n            textKey: \"text\",\n            namespace: _config_pinecone__WEBPACK_IMPORTED_MODULE_4__.PINECONE_NAME_SPACE\n        });\n        // Use a callback to get intermediate sources from the middle of the chain\n        let resolveWithDocuments;\n        const documentPromise = new Promise((resolve)=>{\n            resolveWithDocuments = resolve;\n        });\n        const retriever = vectorStore.asRetriever({\n            callbacks: [\n                {\n                    handleRetrieverEnd (documents) {\n                        resolveWithDocuments(documents);\n                    }\n                }\n            ]\n        });\n        //create chain\n        const chain = (0,_utils_makechain__WEBPACK_IMPORTED_MODULE_2__.makeChain)(retriever);\n        const pastMessages = history.map((message)=>{\n            return [\n                `Human: ${message[0]}`,\n                `Assistant: ${message[1]}`\n            ].join(\"\\n\");\n        }).join(\"\\n\");\n        console.log(pastMessages);\n        //Ask a question using chat history\n        const response = await chain.invoke({\n            question: sanitizedQuestion,\n            chat_history: pastMessages\n        });\n        const sourceDocuments = await documentPromise;\n        console.log(\"response\", response);\n        res.status(200).json({\n            text: response,\n            sourceDocuments\n        });\n    } catch (error) {\n        console.log(\"error\", error);\n        res.status(500).json({\n            error: error.message || \"Something went wrong\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hhdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFK0Q7QUFDQztBQUNsQjtBQUNLO0FBQzBCO0FBRTlELGVBQWVNLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxNQUFNLEVBQUVDLFNBQVEsRUFBRUMsUUFBTyxFQUFFLEdBQUdILElBQUlJLElBQUk7SUFFdENDLFFBQVFDLEdBQUcsQ0FBQyxZQUFZSjtJQUN4QkcsUUFBUUMsR0FBRyxDQUFDLFdBQVdIO0lBRXZCLDJCQUEyQjtJQUMzQixJQUFJSCxJQUFJTyxNQUFNLEtBQUssUUFBUTtRQUN6Qk4sSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXFCO1FBQ25EO0lBQ0YsQ0FBQztJQUVELElBQUksQ0FBQ1IsVUFBVTtRQUNiLE9BQU9ELElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUUsU0FBUztRQUE2QjtJQUN0RSxDQUFDO0lBQ0Qsb0VBQW9FO0lBQ3BFLE1BQU1DLG9CQUFvQlYsU0FBU1csSUFBSSxHQUFHQyxVQUFVLENBQUMsTUFBTTtJQUUzRCxJQUFJO1FBQ0YsTUFBTUMsUUFBUW5CLGtFQUFjLENBQUNDLGlFQUFtQkE7UUFFaEQscUJBQXFCLEdBQ3JCLE1BQU1vQixjQUFjLE1BQU12Qiw0RkFBK0IsQ0FDdkQsSUFBSUQseUVBQWdCQSxDQUFDLENBQUMsSUFDdEI7WUFDRTBCLGVBQWVKO1lBQ2ZLLFNBQVM7WUFDVEMsV0FBV3ZCLGlFQUFtQkE7UUFDaEM7UUFHRiwwRUFBMEU7UUFDMUUsSUFBSXdCO1FBQ0osTUFBTUMsa0JBQWtCLElBQUlDLFFBQW9CLENBQUNDLFVBQVk7WUFDM0RILHVCQUF1Qkc7UUFDekI7UUFDQSxNQUFNQyxZQUFZVCxZQUFZVSxXQUFXLENBQUM7WUFDeENDLFdBQVc7Z0JBQ1Q7b0JBQ0VDLG9CQUFtQkMsU0FBUyxFQUFFO3dCQUM1QlIscUJBQXFCUTtvQkFDdkI7Z0JBQ0Y7YUFDRDtRQUNIO1FBRUEsY0FBYztRQUNkLE1BQU1DLFFBQVFwQywyREFBU0EsQ0FBQytCO1FBRXhCLE1BQU1NLGVBQWU3QixRQUNsQjhCLEdBQUcsQ0FBQyxDQUFDdEIsVUFBOEI7WUFDbEMsT0FBTztnQkFBQyxDQUFDLE9BQU8sRUFBRUEsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUFFLENBQUMsV0FBVyxFQUFFQSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7YUFBQyxDQUFDdUIsSUFBSSxDQUFDO1FBQ25FLEdBQ0NBLElBQUksQ0FBQztRQUNSN0IsUUFBUUMsR0FBRyxDQUFDMEI7UUFFWixtQ0FBbUM7UUFDbkMsTUFBTUcsV0FBVyxNQUFNSixNQUFNSyxNQUFNLENBQUM7WUFDbENsQyxVQUFVVTtZQUNWeUIsY0FBY0w7UUFDaEI7UUFFQSxNQUFNTSxrQkFBa0IsTUFBTWY7UUFFOUJsQixRQUFRQyxHQUFHLENBQUMsWUFBWTZCO1FBQ3hCbEMsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFOEIsTUFBTUo7WUFBVUc7UUFBZ0I7SUFDekQsRUFBRSxPQUFPNUIsT0FBWTtRQUNuQkwsUUFBUUMsR0FBRyxDQUFDLFNBQVNJO1FBQ3JCVCxJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU9BLE1BQU1DLE9BQU8sSUFBSTtRQUF1QjtJQUN4RTtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncHQ0LWxhbmdjaGFpbi1wZGYtY2hhdGJvdC8uL3BhZ2VzL2FwaS9jaGF0LnRzP2M1NzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgdHlwZSB7IERvY3VtZW50IH0gZnJvbSAnbGFuZ2NoYWluL2RvY3VtZW50JztcbmltcG9ydCB7IE9wZW5BSUVtYmVkZGluZ3MgfSBmcm9tICdsYW5nY2hhaW4vZW1iZWRkaW5ncy9vcGVuYWknO1xuaW1wb3J0IHsgUGluZWNvbmVTdG9yZSB9IGZyb20gJ2xhbmdjaGFpbi92ZWN0b3JzdG9yZXMvcGluZWNvbmUnO1xuaW1wb3J0IHsgbWFrZUNoYWluIH0gZnJvbSAnQC91dGlscy9tYWtlY2hhaW4nO1xuaW1wb3J0IHsgcGluZWNvbmUgfSBmcm9tICdAL3V0aWxzL3BpbmVjb25lLWNsaWVudCc7XG5pbXBvcnQgeyBQSU5FQ09ORV9JTkRFWF9OQU1FLCBQSU5FQ09ORV9OQU1FX1NQQUNFIH0gZnJvbSAnQC9jb25maWcvcGluZWNvbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZSxcbikge1xuICBjb25zdCB7IHF1ZXN0aW9uLCBoaXN0b3J5IH0gPSByZXEuYm9keTtcblxuICBjb25zb2xlLmxvZygncXVlc3Rpb24nLCBxdWVzdGlvbik7XG4gIGNvbnNvbGUubG9nKCdoaXN0b3J5JywgaGlzdG9yeSk7XG5cbiAgLy9vbmx5IGFjY2VwdCBwb3N0IHJlcXVlc3RzXG4gIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXF1ZXN0aW9uKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ05vIHF1ZXN0aW9uIGluIHRoZSByZXF1ZXN0JyB9KTtcbiAgfVxuICAvLyBPcGVuQUkgcmVjb21tZW5kcyByZXBsYWNpbmcgbmV3bGluZXMgd2l0aCBzcGFjZXMgZm9yIGJlc3QgcmVzdWx0c1xuICBjb25zdCBzYW5pdGl6ZWRRdWVzdGlvbiA9IHF1ZXN0aW9uLnRyaW0oKS5yZXBsYWNlQWxsKCdcXG4nLCAnICcpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgaW5kZXggPSBwaW5lY29uZS5JbmRleChQSU5FQ09ORV9JTkRFWF9OQU1FKTtcblxuICAgIC8qIGNyZWF0ZSB2ZWN0b3JzdG9yZSovXG4gICAgY29uc3QgdmVjdG9yU3RvcmUgPSBhd2FpdCBQaW5lY29uZVN0b3JlLmZyb21FeGlzdGluZ0luZGV4KFxuICAgICAgbmV3IE9wZW5BSUVtYmVkZGluZ3Moe30pLFxuICAgICAge1xuICAgICAgICBwaW5lY29uZUluZGV4OiBpbmRleCxcbiAgICAgICAgdGV4dEtleTogJ3RleHQnLFxuICAgICAgICBuYW1lc3BhY2U6IFBJTkVDT05FX05BTUVfU1BBQ0UsIC8vbmFtZXNwYWNlIGNvbWVzIGZyb20geW91ciBjb25maWcgZm9sZGVyXG4gICAgICB9LFxuICAgICk7XG5cbiAgICAvLyBVc2UgYSBjYWxsYmFjayB0byBnZXQgaW50ZXJtZWRpYXRlIHNvdXJjZXMgZnJvbSB0aGUgbWlkZGxlIG9mIHRoZSBjaGFpblxuICAgIGxldCByZXNvbHZlV2l0aERvY3VtZW50czogKHZhbHVlOiBEb2N1bWVudFtdKSA9PiB2b2lkO1xuICAgIGNvbnN0IGRvY3VtZW50UHJvbWlzZSA9IG5ldyBQcm9taXNlPERvY3VtZW50W10+KChyZXNvbHZlKSA9PiB7XG4gICAgICByZXNvbHZlV2l0aERvY3VtZW50cyA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgY29uc3QgcmV0cmlldmVyID0gdmVjdG9yU3RvcmUuYXNSZXRyaWV2ZXIoe1xuICAgICAgY2FsbGJhY2tzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBoYW5kbGVSZXRyaWV2ZXJFbmQoZG9jdW1lbnRzKSB7XG4gICAgICAgICAgICByZXNvbHZlV2l0aERvY3VtZW50cyhkb2N1bWVudHMpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgLy9jcmVhdGUgY2hhaW5cbiAgICBjb25zdCBjaGFpbiA9IG1ha2VDaGFpbihyZXRyaWV2ZXIpO1xuXG4gICAgY29uc3QgcGFzdE1lc3NhZ2VzID0gaGlzdG9yeVxuICAgICAgLm1hcCgobWVzc2FnZTogW3N0cmluZywgc3RyaW5nXSkgPT4ge1xuICAgICAgICByZXR1cm4gW2BIdW1hbjogJHttZXNzYWdlWzBdfWAsIGBBc3Npc3RhbnQ6ICR7bWVzc2FnZVsxXX1gXS5qb2luKCdcXG4nKTtcbiAgICAgIH0pXG4gICAgICAuam9pbignXFxuJyk7XG4gICAgY29uc29sZS5sb2cocGFzdE1lc3NhZ2VzKTtcblxuICAgIC8vQXNrIGEgcXVlc3Rpb24gdXNpbmcgY2hhdCBoaXN0b3J5XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjaGFpbi5pbnZva2Uoe1xuICAgICAgcXVlc3Rpb246IHNhbml0aXplZFF1ZXN0aW9uLFxuICAgICAgY2hhdF9oaXN0b3J5OiBwYXN0TWVzc2FnZXMsXG4gICAgfSk7XG5cbiAgICBjb25zdCBzb3VyY2VEb2N1bWVudHMgPSBhd2FpdCBkb2N1bWVudFByb21pc2U7XG5cbiAgICBjb25zb2xlLmxvZygncmVzcG9uc2UnLCByZXNwb25zZSk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB0ZXh0OiByZXNwb25zZSwgc291cmNlRG9jdW1lbnRzIH0pO1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3ZW50IHdyb25nJyB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk9wZW5BSUVtYmVkZGluZ3MiLCJQaW5lY29uZVN0b3JlIiwibWFrZUNoYWluIiwicGluZWNvbmUiLCJQSU5FQ09ORV9JTkRFWF9OQU1FIiwiUElORUNPTkVfTkFNRV9TUEFDRSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJxdWVzdGlvbiIsImhpc3RvcnkiLCJib2R5IiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJzYW5pdGl6ZWRRdWVzdGlvbiIsInRyaW0iLCJyZXBsYWNlQWxsIiwiaW5kZXgiLCJJbmRleCIsInZlY3RvclN0b3JlIiwiZnJvbUV4aXN0aW5nSW5kZXgiLCJwaW5lY29uZUluZGV4IiwidGV4dEtleSIsIm5hbWVzcGFjZSIsInJlc29sdmVXaXRoRG9jdW1lbnRzIiwiZG9jdW1lbnRQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXRyaWV2ZXIiLCJhc1JldHJpZXZlciIsImNhbGxiYWNrcyIsImhhbmRsZVJldHJpZXZlckVuZCIsImRvY3VtZW50cyIsImNoYWluIiwicGFzdE1lc3NhZ2VzIiwibWFwIiwiam9pbiIsInJlc3BvbnNlIiwiaW52b2tlIiwiY2hhdF9oaXN0b3J5Iiwic291cmNlRG9jdW1lbnRzIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/chat.ts\n");

/***/ }),

/***/ "(api)/./utils/makechain.ts":
/*!****************************!*\
  !*** ./utils/makechain.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeChain\": () => (/* binding */ makeChain)\n/* harmony export */ });\n/* harmony import */ var langchain_chat_models_openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! langchain/chat_models/openai */ \"langchain/chat_models/openai\");\n/* harmony import */ var langchain_prompts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/prompts */ \"langchain/prompts\");\n/* harmony import */ var langchain_schema_runnable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! langchain/schema/runnable */ \"langchain/schema/runnable\");\n/* harmony import */ var langchain_schema_output_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! langchain/schema/output_parser */ \"langchain/schema/output_parser\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_chat_models_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_prompts__WEBPACK_IMPORTED_MODULE_1__, langchain_schema_runnable__WEBPACK_IMPORTED_MODULE_2__, langchain_schema_output_parser__WEBPACK_IMPORTED_MODULE_3__]);\n([langchain_chat_models_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_prompts__WEBPACK_IMPORTED_MODULE_1__, langchain_schema_runnable__WEBPACK_IMPORTED_MODULE_2__, langchain_schema_output_parser__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst CONDENSE_TEMPLATE = `Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.\n\n<chat_history>\n  {chat_history}\n</chat_history>\n\nFollow Up Input: {question}\nStandalone question:`;\nconst QA_TEMPLATE = `You are an expert researcher. Use the following pieces of context to answer the question at the end.\nIf you don't know the answer, just say you don't know. DO NOT try to make up an answer.\nIf the question is not related to the context or chat history, politely respond that you are tuned to only answer questions that are related to the context.\n\n<context>\n  {context}\n</context>\n\n<chat_history>\n  {chat_history}\n</chat_history>\n\nQuestion: {question}\nHelpful answer in markdown:`;\nconst combineDocumentsFn = (docs, separator = \"\\n\\n\")=>{\n    const serializedDocs = docs.map((doc)=>doc.pageContent);\n    return serializedDocs.join(separator);\n};\nconst makeChain = (retriever)=>{\n    const condenseQuestionPrompt = langchain_prompts__WEBPACK_IMPORTED_MODULE_1__.ChatPromptTemplate.fromTemplate(CONDENSE_TEMPLATE);\n    const answerPrompt = langchain_prompts__WEBPACK_IMPORTED_MODULE_1__.ChatPromptTemplate.fromTemplate(QA_TEMPLATE);\n    const model = new langchain_chat_models_openai__WEBPACK_IMPORTED_MODULE_0__.ChatOpenAI({\n        temperature: 0,\n        modelName: \"gpt-3.5-turbo\"\n    });\n    // Rephrase the initial question into a dereferenced standalone question based on\n    // the chat history to allow effective vectorstore querying.\n    const standaloneQuestionChain = langchain_schema_runnable__WEBPACK_IMPORTED_MODULE_2__.RunnableSequence.from([\n        condenseQuestionPrompt,\n        model,\n        new langchain_schema_output_parser__WEBPACK_IMPORTED_MODULE_3__.StringOutputParser()\n    ]);\n    // Retrieve documents based on a query, then format them.\n    const retrievalChain = retriever.pipe(combineDocumentsFn);\n    // Generate an answer to the standalone question based on the chat history\n    // and retrieved documents. Additionally, we return the source documents directly.\n    const answerChain = langchain_schema_runnable__WEBPACK_IMPORTED_MODULE_2__.RunnableSequence.from([\n        {\n            context: langchain_schema_runnable__WEBPACK_IMPORTED_MODULE_2__.RunnableSequence.from([\n                (input)=>input.question,\n                retrievalChain\n            ]),\n            chat_history: (input)=>input.chat_history,\n            question: (input)=>input.question\n        },\n        answerPrompt,\n        model,\n        new langchain_schema_output_parser__WEBPACK_IMPORTED_MODULE_3__.StringOutputParser()\n    ]);\n    // First generate a standalone question, then answer it based on\n    // chat history and retrieved context documents.\n    const conversationalRetrievalQAChain = langchain_schema_runnable__WEBPACK_IMPORTED_MODULE_2__.RunnableSequence.from([\n        {\n            question: standaloneQuestionChain,\n            chat_history: (input)=>input.chat_history\n        },\n        answerChain\n    ]);\n    return conversationalRetrievalQAChain;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tYWtlY2hhaW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDSDtBQUNNO0FBQ087QUFJcEUsTUFBTUksb0JBQW9CLENBQUM7Ozs7Ozs7b0JBT1AsQ0FBQztBQUVyQixNQUFNQyxjQUFjLENBQUM7Ozs7Ozs7Ozs7Ozs7MkJBYU0sQ0FBQztBQUU1QixNQUFNQyxxQkFBcUIsQ0FBQ0MsTUFBa0JDLFlBQVksTUFBTSxHQUFLO0lBQ25FLE1BQU1DLGlCQUFpQkYsS0FBS0csR0FBRyxDQUFDLENBQUNDLE1BQVFBLElBQUlDLFdBQVc7SUFDeEQsT0FBT0gsZUFBZUksSUFBSSxDQUFDTDtBQUM3QjtBQUVPLE1BQU1NLFlBQVksQ0FBQ0MsWUFBb0M7SUFDNUQsTUFBTUMseUJBQ0pmLDhFQUErQixDQUFDRztJQUNsQyxNQUFNYyxlQUFlakIsOEVBQStCLENBQUNJO0lBRXJELE1BQU1jLFFBQVEsSUFBSW5CLG9FQUFVQSxDQUFDO1FBQzNCb0IsYUFBYTtRQUNiQyxXQUFXO0lBQ2I7SUFFQSxpRkFBaUY7SUFDakYsNERBQTREO0lBQzVELE1BQU1DLDBCQUEwQnBCLDRFQUFxQixDQUFDO1FBQ3BEYztRQUNBRztRQUNBLElBQUloQiw4RUFBa0JBO0tBQ3ZCO0lBRUQseURBQXlEO0lBQ3pELE1BQU1xQixpQkFBaUJULFVBQVVVLElBQUksQ0FBQ25CO0lBRXRDLDBFQUEwRTtJQUMxRSxrRkFBa0Y7SUFDbEYsTUFBTW9CLGNBQWN4Qiw0RUFBcUIsQ0FBQztRQUN4QztZQUNFeUIsU0FBU3pCLDRFQUFxQixDQUFDO2dCQUM3QixDQUFDMEIsUUFBVUEsTUFBTUMsUUFBUTtnQkFDekJMO2FBQ0Q7WUFDRE0sY0FBYyxDQUFDRixRQUFVQSxNQUFNRSxZQUFZO1lBQzNDRCxVQUFVLENBQUNELFFBQVVBLE1BQU1DLFFBQVE7UUFDckM7UUFDQVg7UUFDQUM7UUFDQSxJQUFJaEIsOEVBQWtCQTtLQUN2QjtJQUVELGdFQUFnRTtJQUNoRSxnREFBZ0Q7SUFDaEQsTUFBTTRCLGlDQUFpQzdCLDRFQUFxQixDQUFDO1FBQzNEO1lBQ0UyQixVQUFVUDtZQUNWUSxjQUFjLENBQUNGLFFBQVVBLE1BQU1FLFlBQVk7UUFDN0M7UUFDQUo7S0FDRDtJQUVELE9BQU9LO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dwdDQtbGFuZ2NoYWluLXBkZi1jaGF0Ym90Ly4vdXRpbHMvbWFrZWNoYWluLnRzP2NmYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhdE9wZW5BSSB9IGZyb20gJ2xhbmdjaGFpbi9jaGF0X21vZGVscy9vcGVuYWknO1xuaW1wb3J0IHsgQ2hhdFByb21wdFRlbXBsYXRlIH0gZnJvbSAnbGFuZ2NoYWluL3Byb21wdHMnO1xuaW1wb3J0IHsgUnVubmFibGVTZXF1ZW5jZSB9IGZyb20gJ2xhbmdjaGFpbi9zY2hlbWEvcnVubmFibGUnO1xuaW1wb3J0IHsgU3RyaW5nT3V0cHV0UGFyc2VyIH0gZnJvbSAnbGFuZ2NoYWluL3NjaGVtYS9vdXRwdXRfcGFyc2VyJztcbmltcG9ydCB0eXBlIHsgRG9jdW1lbnQgfSBmcm9tICdsYW5nY2hhaW4vZG9jdW1lbnQnO1xuaW1wb3J0IHR5cGUgeyBWZWN0b3JTdG9yZVJldHJpZXZlciB9IGZyb20gJ2xhbmdjaGFpbi92ZWN0b3JzdG9yZXMvYmFzZSc7XG5cbmNvbnN0IENPTkRFTlNFX1RFTVBMQVRFID0gYEdpdmVuIHRoZSBmb2xsb3dpbmcgY29udmVyc2F0aW9uIGFuZCBhIGZvbGxvdyB1cCBxdWVzdGlvbiwgcmVwaHJhc2UgdGhlIGZvbGxvdyB1cCBxdWVzdGlvbiB0byBiZSBhIHN0YW5kYWxvbmUgcXVlc3Rpb24uXG5cbjxjaGF0X2hpc3Rvcnk+XG4gIHtjaGF0X2hpc3Rvcnl9XG48L2NoYXRfaGlzdG9yeT5cblxuRm9sbG93IFVwIElucHV0OiB7cXVlc3Rpb259XG5TdGFuZGFsb25lIHF1ZXN0aW9uOmA7XG5cbmNvbnN0IFFBX1RFTVBMQVRFID0gYFlvdSBhcmUgYW4gZXhwZXJ0IHJlc2VhcmNoZXIuIFVzZSB0aGUgZm9sbG93aW5nIHBpZWNlcyBvZiBjb250ZXh0IHRvIGFuc3dlciB0aGUgcXVlc3Rpb24gYXQgdGhlIGVuZC5cbklmIHlvdSBkb24ndCBrbm93IHRoZSBhbnN3ZXIsIGp1c3Qgc2F5IHlvdSBkb24ndCBrbm93LiBETyBOT1QgdHJ5IHRvIG1ha2UgdXAgYW4gYW5zd2VyLlxuSWYgdGhlIHF1ZXN0aW9uIGlzIG5vdCByZWxhdGVkIHRvIHRoZSBjb250ZXh0IG9yIGNoYXQgaGlzdG9yeSwgcG9saXRlbHkgcmVzcG9uZCB0aGF0IHlvdSBhcmUgdHVuZWQgdG8gb25seSBhbnN3ZXIgcXVlc3Rpb25zIHRoYXQgYXJlIHJlbGF0ZWQgdG8gdGhlIGNvbnRleHQuXG5cbjxjb250ZXh0PlxuICB7Y29udGV4dH1cbjwvY29udGV4dD5cblxuPGNoYXRfaGlzdG9yeT5cbiAge2NoYXRfaGlzdG9yeX1cbjwvY2hhdF9oaXN0b3J5PlxuXG5RdWVzdGlvbjoge3F1ZXN0aW9ufVxuSGVscGZ1bCBhbnN3ZXIgaW4gbWFya2Rvd246YDtcblxuY29uc3QgY29tYmluZURvY3VtZW50c0ZuID0gKGRvY3M6IERvY3VtZW50W10sIHNlcGFyYXRvciA9ICdcXG5cXG4nKSA9PiB7XG4gIGNvbnN0IHNlcmlhbGl6ZWREb2NzID0gZG9jcy5tYXAoKGRvYykgPT4gZG9jLnBhZ2VDb250ZW50KTtcbiAgcmV0dXJuIHNlcmlhbGl6ZWREb2NzLmpvaW4oc2VwYXJhdG9yKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYWtlQ2hhaW4gPSAocmV0cmlldmVyOiBWZWN0b3JTdG9yZVJldHJpZXZlcikgPT4ge1xuICBjb25zdCBjb25kZW5zZVF1ZXN0aW9uUHJvbXB0ID1cbiAgICBDaGF0UHJvbXB0VGVtcGxhdGUuZnJvbVRlbXBsYXRlKENPTkRFTlNFX1RFTVBMQVRFKTtcbiAgY29uc3QgYW5zd2VyUHJvbXB0ID0gQ2hhdFByb21wdFRlbXBsYXRlLmZyb21UZW1wbGF0ZShRQV9URU1QTEFURSk7XG5cbiAgY29uc3QgbW9kZWwgPSBuZXcgQ2hhdE9wZW5BSSh7XG4gICAgdGVtcGVyYXR1cmU6IDAsIC8vIGluY3JlYXNlIHRlbXBlcmF0dXJlIHRvIGdldCBtb3JlIGNyZWF0aXZlIGFuc3dlcnNcbiAgICBtb2RlbE5hbWU6ICdncHQtMy41LXR1cmJvJywgLy9jaGFuZ2UgdGhpcyB0byBncHQtNCBpZiB5b3UgaGF2ZSBhY2Nlc3NcbiAgfSk7XG5cbiAgLy8gUmVwaHJhc2UgdGhlIGluaXRpYWwgcXVlc3Rpb24gaW50byBhIGRlcmVmZXJlbmNlZCBzdGFuZGFsb25lIHF1ZXN0aW9uIGJhc2VkIG9uXG4gIC8vIHRoZSBjaGF0IGhpc3RvcnkgdG8gYWxsb3cgZWZmZWN0aXZlIHZlY3RvcnN0b3JlIHF1ZXJ5aW5nLlxuICBjb25zdCBzdGFuZGFsb25lUXVlc3Rpb25DaGFpbiA9IFJ1bm5hYmxlU2VxdWVuY2UuZnJvbShbXG4gICAgY29uZGVuc2VRdWVzdGlvblByb21wdCxcbiAgICBtb2RlbCxcbiAgICBuZXcgU3RyaW5nT3V0cHV0UGFyc2VyKCksXG4gIF0pO1xuXG4gIC8vIFJldHJpZXZlIGRvY3VtZW50cyBiYXNlZCBvbiBhIHF1ZXJ5LCB0aGVuIGZvcm1hdCB0aGVtLlxuICBjb25zdCByZXRyaWV2YWxDaGFpbiA9IHJldHJpZXZlci5waXBlKGNvbWJpbmVEb2N1bWVudHNGbik7XG5cbiAgLy8gR2VuZXJhdGUgYW4gYW5zd2VyIHRvIHRoZSBzdGFuZGFsb25lIHF1ZXN0aW9uIGJhc2VkIG9uIHRoZSBjaGF0IGhpc3RvcnlcbiAgLy8gYW5kIHJldHJpZXZlZCBkb2N1bWVudHMuIEFkZGl0aW9uYWxseSwgd2UgcmV0dXJuIHRoZSBzb3VyY2UgZG9jdW1lbnRzIGRpcmVjdGx5LlxuICBjb25zdCBhbnN3ZXJDaGFpbiA9IFJ1bm5hYmxlU2VxdWVuY2UuZnJvbShbXG4gICAge1xuICAgICAgY29udGV4dDogUnVubmFibGVTZXF1ZW5jZS5mcm9tKFtcbiAgICAgICAgKGlucHV0KSA9PiBpbnB1dC5xdWVzdGlvbixcbiAgICAgICAgcmV0cmlldmFsQ2hhaW4sXG4gICAgICBdKSxcbiAgICAgIGNoYXRfaGlzdG9yeTogKGlucHV0KSA9PiBpbnB1dC5jaGF0X2hpc3RvcnksXG4gICAgICBxdWVzdGlvbjogKGlucHV0KSA9PiBpbnB1dC5xdWVzdGlvbixcbiAgICB9LFxuICAgIGFuc3dlclByb21wdCxcbiAgICBtb2RlbCxcbiAgICBuZXcgU3RyaW5nT3V0cHV0UGFyc2VyKCksXG4gIF0pO1xuXG4gIC8vIEZpcnN0IGdlbmVyYXRlIGEgc3RhbmRhbG9uZSBxdWVzdGlvbiwgdGhlbiBhbnN3ZXIgaXQgYmFzZWQgb25cbiAgLy8gY2hhdCBoaXN0b3J5IGFuZCByZXRyaWV2ZWQgY29udGV4dCBkb2N1bWVudHMuXG4gIGNvbnN0IGNvbnZlcnNhdGlvbmFsUmV0cmlldmFsUUFDaGFpbiA9IFJ1bm5hYmxlU2VxdWVuY2UuZnJvbShbXG4gICAge1xuICAgICAgcXVlc3Rpb246IHN0YW5kYWxvbmVRdWVzdGlvbkNoYWluLFxuICAgICAgY2hhdF9oaXN0b3J5OiAoaW5wdXQpID0+IGlucHV0LmNoYXRfaGlzdG9yeSxcbiAgICB9LFxuICAgIGFuc3dlckNoYWluLFxuICBdKTtcblxuICByZXR1cm4gY29udmVyc2F0aW9uYWxSZXRyaWV2YWxRQUNoYWluO1xufTtcbiJdLCJuYW1lcyI6WyJDaGF0T3BlbkFJIiwiQ2hhdFByb21wdFRlbXBsYXRlIiwiUnVubmFibGVTZXF1ZW5jZSIsIlN0cmluZ091dHB1dFBhcnNlciIsIkNPTkRFTlNFX1RFTVBMQVRFIiwiUUFfVEVNUExBVEUiLCJjb21iaW5lRG9jdW1lbnRzRm4iLCJkb2NzIiwic2VwYXJhdG9yIiwic2VyaWFsaXplZERvY3MiLCJtYXAiLCJkb2MiLCJwYWdlQ29udGVudCIsImpvaW4iLCJtYWtlQ2hhaW4iLCJyZXRyaWV2ZXIiLCJjb25kZW5zZVF1ZXN0aW9uUHJvbXB0IiwiZnJvbVRlbXBsYXRlIiwiYW5zd2VyUHJvbXB0IiwibW9kZWwiLCJ0ZW1wZXJhdHVyZSIsIm1vZGVsTmFtZSIsInN0YW5kYWxvbmVRdWVzdGlvbkNoYWluIiwiZnJvbSIsInJldHJpZXZhbENoYWluIiwicGlwZSIsImFuc3dlckNoYWluIiwiY29udGV4dCIsImlucHV0IiwicXVlc3Rpb24iLCJjaGF0X2hpc3RvcnkiLCJjb252ZXJzYXRpb25hbFJldHJpZXZhbFFBQ2hhaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/makechain.ts\n");

/***/ }),

/***/ "(api)/./utils/pinecone-client.ts":
/*!**********************************!*\
  !*** ./utils/pinecone-client.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pinecone\": () => (/* binding */ pinecone)\n/* harmony export */ });\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pinecone-database/pinecone */ \"@pinecone-database/pinecone\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.PINECONE_ENVIRONMENT || !process.env.PINECONE_API_KEY) {\n    throw new Error(\"Pinecone environment or api key vars missing\");\n}\nasync function initPinecone() {\n    try {\n        const pinecone = new _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__.Pinecone({\n            environment: process.env.PINECONE_ENVIRONMENT ?? \"\",\n            apiKey: process.env.PINECONE_API_KEY ?? \"\"\n        });\n        return pinecone;\n    } catch (error) {\n        console.log(\"error\", error);\n        throw new Error(\"Failed to initialize Pinecone Client\");\n    }\n}\nconst pinecone = await initPinecone();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9waW5lY29uZS1jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1RDtBQUV2RCxJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0Msb0JBQW9CLElBQUksQ0FBQ0YsUUFBUUMsR0FBRyxDQUFDRSxnQkFBZ0IsRUFBRTtJQUN0RSxNQUFNLElBQUlDLE1BQU0sZ0RBQWdEO0FBQ2xFLENBQUM7QUFFRCxlQUFlQyxlQUFlO0lBQzVCLElBQUk7UUFDRixNQUFNQyxXQUFXLElBQUlQLGlFQUFRQSxDQUFDO1lBQzVCUSxhQUFhUCxRQUFRQyxHQUFHLENBQUNDLG9CQUFvQixJQUFJO1lBQ2pETSxRQUFRUixRQUFRQyxHQUFHLENBQUNFLGdCQUFnQixJQUFJO1FBQzFDO1FBRUEsT0FBT0c7SUFDVCxFQUFFLE9BQU9HLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDLFNBQVNGO1FBQ3JCLE1BQU0sSUFBSUwsTUFBTSx3Q0FBd0M7SUFDMUQ7QUFDRjtBQUVPLE1BQU1FLFdBQVcsTUFBTUQsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2dwdDQtbGFuZ2NoYWluLXBkZi1jaGF0Ym90Ly4vdXRpbHMvcGluZWNvbmUtY2xpZW50LnRzP2RmMzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGluZWNvbmUgfSBmcm9tICdAcGluZWNvbmUtZGF0YWJhc2UvcGluZWNvbmUnO1xuXG5pZiAoIXByb2Nlc3MuZW52LlBJTkVDT05FX0VOVklST05NRU5UIHx8ICFwcm9jZXNzLmVudi5QSU5FQ09ORV9BUElfS0VZKSB7XG4gIHRocm93IG5ldyBFcnJvcignUGluZWNvbmUgZW52aXJvbm1lbnQgb3IgYXBpIGtleSB2YXJzIG1pc3NpbmcnKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdFBpbmVjb25lKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHBpbmVjb25lID0gbmV3IFBpbmVjb25lKHtcbiAgICAgIGVudmlyb25tZW50OiBwcm9jZXNzLmVudi5QSU5FQ09ORV9FTlZJUk9OTUVOVCA/PyAnJywgLy90aGlzIGlzIGluIHRoZSBkYXNoYm9hcmRcbiAgICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuUElORUNPTkVfQVBJX0tFWSA/PyAnJyxcbiAgICB9KTtcblxuICAgIHJldHVybiBwaW5lY29uZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gaW5pdGlhbGl6ZSBQaW5lY29uZSBDbGllbnQnKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGluZWNvbmUgPSBhd2FpdCBpbml0UGluZWNvbmUoKTtcbiJdLCJuYW1lcyI6WyJQaW5lY29uZSIsInByb2Nlc3MiLCJlbnYiLCJQSU5FQ09ORV9FTlZJUk9OTUVOVCIsIlBJTkVDT05FX0FQSV9LRVkiLCJFcnJvciIsImluaXRQaW5lY29uZSIsInBpbmVjb25lIiwiZW52aXJvbm1lbnQiLCJhcGlLZXkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/pinecone-client.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/chat.ts"));
module.exports = __webpack_exports__;

})();