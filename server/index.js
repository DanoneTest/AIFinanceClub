const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3001;

// Enable CORS for frontend on port 8080
app.use(cors());
app.use(express.json());

// Data file paths
const DATA_DIR = path.join(__dirname, 'data');
const TIPS_FILE = path.join(DATA_DIR, 'tips.json');
const USE_CASES_FILE = path.join(DATA_DIR, 'use_cases.json');
const NEWS_FILE = path.join(DATA_DIR, 'news.json');
const EVENTS_FILE = path.join(DATA_DIR, 'events.json');

// Initialize data files
async function initDataFiles() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    
    try {
      await fs.access(TIPS_FILE);
    } catch {
      await fs.writeFile(TIPS_FILE, '[]');
      console.log('Created tips.json');
    }
    
    try {
      await fs.access(USE_CASES_FILE);
    } catch {
      await fs.writeFile(USE_CASES_FILE, '[]');
      console.log('Created use_cases.json');
    }
    
    try {
      await fs.access(NEWS_FILE);
    } catch {
      await fs.writeFile(NEWS_FILE, '[]');
      console.log('Created news.json');
    }
    
    try {
      await fs.access(EVENTS_FILE);
    } catch {
      await fs.writeFile(EVENTS_FILE, '[]');
      console.log('Created events.json');
    }
  } catch (error) {
    console.error('Error initializing data files:', error);
  }
}

// Helper functions
async function readJSON(filePath) {
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

async function writeJSON(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

// Tips endpoints
app.get('/api/tips', async (req, res) => {
  try {
    const tips = await readJSON(TIPS_FILE);
    res.json(tips);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read tips' });
  }
});

app.post('/api/tips', async (req, res) => {
  try {
    const tips = await readJSON(TIPS_FILE);
    const newTip = {
      ...req.body,
      id: `tip-${Date.now()}`
    };
    tips.push(newTip);
    await writeJSON(TIPS_FILE, tips);
    res.json(newTip);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create tip' });
  }
});

app.delete('/api/tips/:id', async (req, res) => {
  try {
    const tips = await readJSON(TIPS_FILE);
    const filtered = tips.filter(t => t.id !== req.params.id);
    await writeJSON(TIPS_FILE, filtered);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete tip' });
  }
});

// Use cases endpoints
app.get('/api/use-cases', async (req, res) => {
  try {
    const useCases = await readJSON(USE_CASES_FILE);
    res.json(useCases);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read use cases' });
  }
});

app.post('/api/use-cases', async (req, res) => {
  try {
    const useCases = await readJSON(USE_CASES_FILE);
    const newUseCase = {
      ...req.body,
      id: `uc-${Date.now()}`
    };
    useCases.push(newUseCase);
    await writeJSON(USE_CASES_FILE, useCases);
    res.json(newUseCase);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create use case' });
  }
});

app.delete('/api/use-cases/:id', async (req, res) => {
  try {
    const useCases = await readJSON(USE_CASES_FILE);
    const filtered = useCases.filter(u => u.id !== req.params.id);
    await writeJSON(USE_CASES_FILE, filtered);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete use case' });
  }
});

// News endpoints
app.get('/api/news', async (req, res) => {
  try {
    const newsItems = await readJSON(NEWS_FILE);
    res.json(newsItems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read news' });
  }
});

app.post('/api/news', async (req, res) => {
  try {
    const newsItems = await readJSON(NEWS_FILE);
    const newNews = {
      ...req.body,
      id: `news-${Date.now()}`
    };
    newsItems.push(newNews);
    await writeJSON(NEWS_FILE, newsItems);
    res.json(newNews);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create news' });
  }
});

app.delete('/api/news/:id', async (req, res) => {
  try {
    const newsItems = await readJSON(NEWS_FILE);
    const filtered = newsItems.filter(n => n.id !== req.params.id);
    await writeJSON(NEWS_FILE, filtered);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete news' });
  }
});

// Events endpoints
app.get('/api/events', async (req, res) => {
  try {
    const eventsItems = await readJSON(EVENTS_FILE);
    res.json(eventsItems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read events' });
  }
});

app.post('/api/events', async (req, res) => {
  try {
    const eventsItems = await readJSON(EVENTS_FILE);
    const newEvent = {
      ...req.body,
      id: `event-${Date.now()}`
    };
    eventsItems.push(newEvent);
    await writeJSON(EVENTS_FILE, eventsItems);
    res.json(newEvent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event' });
  }
});

app.delete('/api/events/:id', async (req, res) => {
  try {
    const eventsItems = await readJSON(EVENTS_FILE);
    const filtered = eventsItems.filter(e => e.id !== req.params.id);
    await writeJSON(EVENTS_FILE, filtered);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete event' });
  }
});

// Start server
initDataFiles().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`CORS enabled for frontend access`);
  });
});
