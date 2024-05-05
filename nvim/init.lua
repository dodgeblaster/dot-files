-- bootstrap lazy.nvim, LazyVim and your plugins
require("config.lazy")

-- Set simple file tree
vim.keymap.set("n", "<Leader>fd", "<cmd>Ex<cr>")

-- Switch to the previous buffer or tab
vim.keymap.set("n", "<Leader>fs", "<C-^>")

-- easier version of escape
vim.keymap.set("i", "jk", "<ESC>", { silent = true })
