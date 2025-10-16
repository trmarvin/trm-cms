export default {
  async bootstrap({ strapi }) {
    // ---- Seed Domains ----
    const domains = [
      { title: 'Jewish History', slug: 'jewish-history' },
      { title: 'Jewish Thought', slug: 'jewish-thought' },
      { title: 'Talmud', slug: 'talmud' },
      { title: 'Halakha', slug: 'halakha' },
      { title: 'Tanakh', slug: 'tanakh' },
      { title: 'Holidays', slug: 'holidays' },
    ];
     // ---- Seed Topics ----
    const topics = [
      // Period
      { title: 'Antiquity', slug: 'antiquity'},
      { title: 'Early Medieval', slug: 'early-medieval' },
      { title: 'High Medieval', slug: 'high-medieval' },
      { title: 'Late Medieval', slug: 'late-medieval' },
      { title: 'Early Modern', slug: 'early-modern' },
      { title: 'Modern', slug: 'modern' },
      { title: 'Postmodern', slug: 'postmodern'},

      // Region
      { title: 'Land of Israel', slug: 'israel' },
      { title: 'Sefarad', slug: 'sefarad'},
      { title: 'Ashkenaz', slug: 'ashkenaz' },
      { title: 'Italy', slug: 'italy' },
      { title: 'Provence', slug: 'provence' },
      { title: 'Islamicate Empire', slug: 'islamicate' },
      { title: 'Babylonia/Iraq', slug: 'bavel' },
      { title: 'al-Andalus', slug: 'al-andalus' },
      { title: 'Maghrib', slug: 'maghrib' },
      { title: 'Byzantium', slug: 'byzantium' },
      { title: 'Ottoman Empire', slug: 'ottoman' },
      { title: 'Yemen', slug: 'yemen' },

      // Genre
      { title: 'Halakhic Code', slug: 'halakhic-code', bucket: 'genre' },
      { title: 'Responsa', slug: 'responsa', bucket: 'genre' },
      { title: 'Commentary—Talmud', slug: 'commentary-talmud', bucket: 'genre' },
      { title: 'Commentary—Tanakh', slug: 'commentary-tanakh', bucket: 'genre' },
      { title: 'Philosophical Treatise', slug: 'philosophical-treatise', bucket: 'genre' },
      { title: 'Mystical Treatise', slug: 'mystical-treatise', bucket: 'genre' },
      { title: 'Piyyut', slug: 'piyyut', bucket: 'genre' },
      { title: 'Lexicography', slug: 'lexicography', bucket: 'genre' },
      { title: 'Derasha', slug: 'derasha', bucket: 'genre' },

      // Movement
      { title: 'Maimonideanism', slug: 'maimonideanism', bucket: 'movement' },
      { title: 'Hasidei Ashkenaz', slug: 'hasidei-ashkenaz', bucket: 'movement' },
      { title: 'Kabbalah of Gerona', slug: 'kabbalah-of-gerona', bucket: 'movement' },
      { title: 'Zoharic Literature', slug: 'zoharic-literature', bucket: 'movement' },
      { title: 'Lurianic Kabbalah', slug: 'lurianic-kabbalah', bucket: 'movement' },
      { title: 'Mussar', slug: 'mussar', bucket: 'movement' },
      { title: 'Haskalah', slug: 'haskalah', bucket: 'movement' },

      // Concept
      { title: 'Sefirot', slug: 'sefirot', bucket: 'concept' },
      { title: 'Emanation', slug: 'emanation', bucket: 'concept' },
      { title: 'Prophecy', slug: 'prophecy', bucket: 'concept' },
      { title: 'Providence', slug: 'providence', bucket: 'concept' },
      { title: 'Creation', slug: 'creation', bucket: 'concept' },
      { title: 'Free Will', slug: 'free-will', bucket: 'concept' },
      { title: 'Theodicy', slug: 'theodicy', bucket: 'concept' },
      { title: 'Divine Attributes', slug: 'divine-attributes', bucket: 'concept' },
      { title: 'Torah min ha-Shamayim', slug: 'torah-min-ha-shamayim', bucket: 'concept' },
      { title: 'Aggadah', slug: 'aggadah', bucket: 'concept' },
      { title: 'Taamei ha-Mitzvot', slug: 'taamei-ha-mitzvot', bucket: 'concept' },

      // Language
      { title: 'Hebrew', slug: 'hebrew', bucket: 'language' },
      { title: 'Aramaic', slug: 'aramaic', bucket: 'language' },
      { title: 'Judeo-Arabic', slug: 'judeo-arabic', bucket: 'language' },
      { title: 'Ladino', slug: 'ladino', bucket: 'language' },
      { title: 'Yiddish', slug: 'yiddish', bucket: 'language' },

      // Corpus
      { title: 'Mishneh Torah', slug: 'mishneh-torah', bucket: 'corpus' },
      { title: 'Guide of the Perplexed', slug: 'guide-of-the-perplexed', bucket: 'corpus' },
      { title: 'Sefer ha-Bahir', slug: 'sefer-ha-bahir', bucket: 'corpus' },
      { title: 'Zohar', slug: 'zohar', bucket: 'corpus' },
      { title: 'Shulchan Arukh', slug: 'shulchan-arukh', bucket: 'corpus' },

      // Holiday
      { title: 'Rosh Hashanah', slug: 'rosh-hashanah', bucket: 'holiday' },
      { title: 'Yom Kippur', slug: 'yom-kippur', bucket: 'holiday' },
      { title: 'Sukkot', slug: 'sukkot', bucket: 'holiday' },
      { title: 'Chanukah', slug: 'chanukah', bucket: 'holiday' },
      { title: 'Purim', slug: 'purim', bucket: 'holiday' },
      { title: 'Pesach', slug: 'pesach', bucket: 'holiday' },
      { title: 'Shavuot', slug: 'shavuot', bucket: 'holiday' },
      { title: 'Tisha b’Av', slug: 'tisha-bav', bucket: 'holiday' },
    ];

    try {
      // --- Domains ---
      const domainCount = await strapi.entityService.count('api::domain.domain');
      if (domainCount === 0) {
        for (const d of domains) {
          await strapi.entityService.create('api::domain.domain', { data: d });
        }
        strapi.log.info(`✅ Seeded ${domains.length} domains`);
      } else {
        strapi.log.info('✅ Domains already exist, skipping seed');
      }

      // --- Topics ---
      const topicCount = await strapi.entityService.count('api::topic.topic');
      if (topicCount === 0) {
        for (const t of topics) {
          await strapi.entityService.create('api::topic.topic', { data: t });
        }
        strapi.log.info(`✅ Seeded ${topics.length} topics`);
      } else {
        strapi.log.info('✅ Topics already exist, skipping seed');
      }

    } catch (err) {
      strapi.log.error('❌ Error seeding initial data:', err);
    }
  },
};