import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoreModule, HttpCacheService } from '@app/core';
import { SearchService } from './search.service';
import { Employee } from './employee';

describe('SearchService', () => {
  let searchService: SearchService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, HttpClientTestingModule],
      providers: [HttpCacheService, SearchService]
    });
  }));

  beforeEach(inject(
    [HttpCacheService, SearchService, HttpTestingController],
    (htttpCacheService: HttpCacheService, _searchService: SearchService, _httpMock: HttpTestingController) => {
      searchService = _searchService;
      httpMock = _httpMock;

      htttpCacheService.cleanCache();
    }
  ));

  afterEach(() => {
    httpMock.verify();
  });

  describe('getEmployees', () => {
    it('should return a list of employees', () => {
      // Act
      const employeesSubscription = searchService.getEmployees();

      // Assert
      employeesSubscription.subscribe((search: Employee[]) => {
        expect(search).toEqual(mockEmployees);
      });
      httpMock.expectOne({}).flush(mockEmployees);
    });

    it('should return a string in case of error', () => {
      // Act
      const employeesSubscription = searchService.getEmployees();

      // Assert
      employeesSubscription.subscribe((search: string) => {
        expect(typeof search).toEqual('string');
        expect(search).toContain('Error');
      });
      httpMock.expectOne({}).flush(null, {
        status: 500,
        statusText: 'error'
      });
    });
  });
});

// Arrange
export const mockEmployees = [
  {
    id: 1,
    avatar: 'https://robohash.org/aliquamconsequatursunt.bmp?size=50x50&set=set1',
    firstName: 'Noellyn',
    lastName: 'Kupke',
    email: 'nkupke0@mayoclinic.com',
    role: 'Software Engineer',
    grade: 'A1',
    skills: ['Background Checks', 'ITIL v3 Foundations Certified', 'LSI'],
    languages: ['German', 'English'],
    mobility: 'Relocation',
    employmentType: 'full-time',
    project: {
      name: 'Ruecker and Sons',
      startDate: 1495284953,
      endDate: 1587428808
    },
    onBench: false,
    availability: 'since Apr 2020',
    summary: 'Upgradable tangible challenge',
    preference: {
      languages: ['German', 'English'],
      skills: ['Museum Collections'],
      role: 'Applications Consultant 1',
      grade: 'A1',
      description: 'enhance visionary niches'
    },
    experiences: [
      {
        company: 'Riffpath',
        country: 'Canada',
        time: '4 years',
        role: 'Chemical Engineer',
        industry: 'Business Services',
        project: 'Herb Of Gilead',
        responsibilities:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
        skills: ['Pressure Vessels', 'Certified EKG Technician']
      },
      {
        company: 'Chatterpoint',
        country: 'Portugal',
        time: '4 years',
        role: 'VP Marketing',
        industry: 'n/a',
        project: 'Grapefern',
        responsibilities:
          'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
        skills: ['Social Skills', 'TTCN', 'Lymphoma']
      }
    ],
    educations: [
      {
        country: 'France',
        university: 'Ecole Nationale Supérieure de Chimie de Clermont-Ferrand',
        course: 'Visual Merchandising',
        degree: "Master's"
      }
    ]
  },
  {
    id: 2,
    avatar: 'https://robohash.org/possimusdolorest.bmp?size=50x50&set=set1',
    firstName: 'Tammie',
    lastName: 'McEttigen',
    email: 'tmcettigen1@patch.com',
    role: 'Business Analyst 1',
    grade: 'A1',
    skills: ['Gifted Education', 'Environmental Policy', 'DMPK'],
    languages: ['English'],
    mobility: 'Monthly',
    employmentType: 'full-time',
    project: {
      name: 'Romaguera, Stark and Green',
      startDate: 1552516635,
      endDate: 1599172635
    },
    onBench: false,
    availability: 'since Sep 2020',
    summary: 'Function-based transitional encoding',
    preference: {
      languages: ['English'],
      skills: ['XMetal'],
      role: 'Software Engineer',
      grade: 'A1',
      description: 'engineer dynamic eyeballs'
    },
    experiences: [
      {
        company: 'Livetube',
        country: 'United States',
        time: '3 years',
        role: 'Office Assistant IV',
        industry: 'Savings Institutions',
        project: 'Odontoglossum',
        responsibilities: 'Suspendisse accumsan tortor quis turpis. Sed ante.',
        skills: ['SAP SD', 'Early Childhood Education', 'Luminex']
      }
    ],
    educations: [
      {
        country: 'Brazil',
        university: 'Universidade São Marcos',
        course: 'WF',
        degree: "Master's"
      }
    ]
  }
] as Employee[];
