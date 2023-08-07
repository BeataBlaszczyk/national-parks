import { setActivePinia, createPinia } from 'pinia';
import mockRawArticlesJson from '../../src/staticData/RawArticles.json'
import { useArticlesStore } from '../../src/stores/index';
import axios from "axios"

jest.mock('axios')
jest.mock('../../src/services/getArticlesList', () => jest.fn(
   Promise.resolve(mockRawArticlesJson)
    ),
  );
  
  describe('ArticlesStore.js', () => {
    setActivePinia(createPinia());
    let rawArticles;
    let articles;

    beforeEach(async () => {
      await useAgreementsStore().articlesInizialization(1);
      rawArticles = useArticlesStore().rawArticles;
      articles = useAgreementsStore().articles;
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    it('After invoking articlesInizialization, the articles value is NOT undefined', async () => {
      expect(rawArticles).toBeDefined();
    });
  
    it('articlesInizialization assigns an array to the rawArticles.value', async () => {
      expect(rawArticles).toStrictEqual(expect.any(Object));
    });
  
    it('articles returns an array', async () => {
      expect(articles).toStrictEqual(expect.any(Array));
    });
  
    it('agreementSelectItems has required structure', async () => {
      const requiredProperties = ['title', 'id', 'articleUrl', 'shortDescription', 'image'];
      const checkArticles = (article) => requiredProperties.every(
        // eslint-disable-next-line no-prototype-builtins
        (property) => articles.hasOwnProperty(property)
      );
  
      expect(options.every(checkArticles)).toBeTruthy();
      options.push({ articleName: 'random string' });
      expect(options.every(checkArticles)).toBeFalsy();
  
    });
  
  });
  
   